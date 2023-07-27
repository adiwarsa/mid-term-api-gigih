const db = require("../models")
const Products = db.product

exports.create = (req, res) => {
    const newProduct = new Products({
        productName: req.body.productName,
        productQty: req.body.productQty,
        productPrice: req.body.productPrice,
        productLink: req.body.productLink,
        description: req.body.description,
      });
      
    newProduct
    .save()
    .then((product) => {
        res.status(201).json({ message:"Product created succesfully", product });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

exports.findAll = async (req, res) => {
    try {
      const product = await Products.find({}).exec();
  
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.show = async (req, res) => {
    try {
        const productId = parseInt(req.params.productId, 10);

        const product = await Products.findOne({ productId }).exec();
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.update = async (req, res) => {
    try {
      const productId = parseInt(req.params.productId, 10); 
  
      const product = await Products.findOneAndUpdate(
        { productId }, 
        {
          productName: req.body.productName,
          productQty: req.body.productQty,
          productPrice: req.body.productPrice,
          productLink: req.body.productLink,
          description: req.body.description,
        },
        { new: true } 
      ).exec();
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.delete = async (req, res) => {
    try {
      const productId = parseInt(req.params.productId, 10); 
  
      const product = await Products.findOneAndRemove({ productId }).exec();
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

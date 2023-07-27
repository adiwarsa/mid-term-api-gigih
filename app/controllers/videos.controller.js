const db = require("../models")
const Videos = db.video;
const Products = db.product;

exports.create = (req, res) => {
    const newVideos = new Videos({
        title: req.body.title,
        urlThumbnail: req.body.urlThumbnail,
        productId: req.body.productId,
      });
      
    newVideos
    .save()
    .then((video) => {
        res.status(201).json({ message:"Video created succesfully", video });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

exports.findAll = async (req, res) => {
    try {
      const video = await Videos.find({}).exec();
  
      res.status(200).json({ video });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.show = async (req, res) => {
    try {
        const videoId = parseInt(req.params.videoId, 10); 

        const video = await Videos.findOne({ videoId }).exec();
  
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
  
      res.status(200).json({ video });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.update = async (req, res) => {
    try {
      const videoId = parseInt(req.params.videoId, 10); 
  
      const video = await Videos.findOneAndUpdate(
        { videoId }, 
        {
            title: req.body.title,
            urlThumbnail: req.body.urlThumbnail,
            productId: req.body.productId,
        },
        { new: true } 
      ).exec();
  
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
  
      res.status(200).json({ message: "Video updated successfully", video });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  exports.delete = async (req, res) => {
    try {
      const videoId = parseInt(req.params.videoId, 10);
  
      const video = await Videos.findOneAndRemove({ videoId }).exec();
  
      if (!video) {
        return res.status(404).json({ message: "Video not found" });
      }
  
      res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getProductByVideoId = async (req, res) => {
    try {
      const { videoId } = req.params;
  
      const video = await Videos.findOne({ videoId: parseInt(videoId, 10) });
  
      if (!video) {
        return res.status(404).json({ error: 'Video not found' });
      }
  
      const productId = video.productId;
  
    const products = await Products.find({ productId: { $in: productId } });

    if (products.length === 0) {
        return res.status(404).json({ error: 'Products not found' });
      }
  
      const filteredProducts = products.map(product => {
        return {
          productId: product.productId,
          link: product.productLink,
          title: product.productName,
          price: product.productPrice
        };
      });

      res.json(filteredProducts);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };

  

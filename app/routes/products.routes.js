module.exports = app => {
    const products = require("../controllers/products.controller")
    const route = require("express").Router();

    route.post("/", products.create);
    route.get("/", products.findAll);
    route.get("/:productId", products.show);
    route.put("/:productId", products.update);
    route.delete("/:productId", products.delete);
 

    app.use("/api/products", route);

}
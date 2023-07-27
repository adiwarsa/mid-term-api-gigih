module.exports = app => {
    const videos = require("../controllers/videos.controller")
    const comments = require("../controllers/comments.controller")
    const route = require("express").Router();

    route.post("/create", videos.create);
    route.get("/", videos.findAll);
    route.get("/:videoId/product", videos.getProductByVideoId);
    route.post("/:videoId", comments.create);
    route.get("/:videoId/comment", comments.getCommentByVideoId);
    route.get("/:videoId", videos.show);
    route.put("/:videoId", videos.update);
    route.delete("/:videoId", videos.delete);
 

    app.use("/api/videos", route);

}
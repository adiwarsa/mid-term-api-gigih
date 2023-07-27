const db = require("../models")
const Comments = db.comment;

exports.create = (req, res) => {
    const { username, comment } = req.body; 
    const videoId = req.params.videoId; 
  
    const newComment = new Comments({
      username: username,
      comment: comment,
      videoId: videoId, 
    });
  
    newComment
      .save()
      .then((comment) => {
        res.status(201).json({ message: 'Comment created successfully', comment });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  };

exports.findAll = async (req, res) => {
    try {
      const comment = await Comments.find({}).exec();
  
      res.status(200).json({ comment });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.delete = async (req, res) => {
    try {
      const commentId = parseInt(req.params.commentId, 10);
  
      const comment = await Comments.findOneAndRemove({ commentId }).exec();
  
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
  
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getCommentByVideoId = async (req, res) => {
    try {
      const { videoId } = req.params;
  
      const comments = await Comments.find({ videoId: parseInt(videoId, 10) });
  
      if (comments.length === 0) {
        return res.status(404).json({ error: 'No comments found for the video' });
      }
  
      const filteredComments = comments.map(comment => {
        return {
          username: comment.username,
          comment: comment.comment,
          timestamp: comment.createdAt
        };
      });
  
      res.json(filteredComments);
    } catch (error) {
      res.status(500).json({ error: 'Server Error' });
    }
  };



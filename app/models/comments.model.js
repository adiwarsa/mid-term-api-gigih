module.exports = mongoose => {
    const Schema = mongoose.Schema(
        {
            commentId: Number,
            username: String,
            comment: String,
            videoId: Number,
        },{
            timestamps: true
        }
    );

    Schema.pre('save', async function (next) {
        try {
            if (!this.isNew) {
                return next();
            }

            const lastComment = await this.constructor.findOne({}, { commentId: 1 }, { sort: { commentId: -1 } });

            if (lastComment) {
                this.commentId = lastComment.commentId + 1;
            } else {
                this.commentId = 1;
            }

            next();
        } catch (err) {
            next(err);
        }
    });

    return mongoose.model("comments", Schema);
};

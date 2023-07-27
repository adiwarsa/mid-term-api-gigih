module.exports = mongoose => {
    const Schema = mongoose.Schema(
        {
            videoId: Number,
            title: String,
            urlThumbnail: String,
            productId: [Number],
        },{
            timestamps: true
        }
    );

    Schema.pre('save', async function (next) {
        try {
            if (!this.isNew) {
                return next();
            }

            const lastVideo = await this.constructor.findOne({}, { videoId: 1 }, { sort: { videoId: -1 } });

            if (lastVideo) {
                this.videoId = lastVideo.videoId + 1;
            } else {
                this.videoId = 1;
            }

            next();
        } catch (err) {
            next(err);
        }
    });

    return mongoose.model("videos", Schema);
};

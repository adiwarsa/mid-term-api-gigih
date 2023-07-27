module.exports = mongoose => {
    const Schema = mongoose.Schema(
        {
            productId: Number,
            productName: String,
            productQty: Number,
            productPrice: String,
            productLink: String,
            description: String, 
        },{
            timestamps: true
        }
    );

    Schema.pre('save', async function (next) {
        try {
            if (!this.isNew) {
                return next();
            }

            const lastProduct = await this.constructor.findOne({}, { productId: 1 }, { sort: { productId: -1 } });

            if (lastProduct) {
                this.productId = lastProduct.productId + 1;
            } else {
                this.productId = 1;
            }

            next();
        } catch (err) {
            next(err);
        }
    });

    return mongoose.model("products", Schema);
};

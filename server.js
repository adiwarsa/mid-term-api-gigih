const express = require('express');
const app = express();
const db = require("./app/models")


app.use(express.json());

const mongooseConfig = {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
.then(()=> console.log("database connected"))
.catch(err => {
    console.log(`gagal konel ${err.message}`);
    process.exit();
})

require("./app/routes/products.routes")(app);
require("./app/routes/videos.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const mongoose = require("mongoose");

exports.mongoconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection established");
    } catch (error) {
        console.log(error.message);
    }
};
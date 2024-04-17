const mongoose = require('mongoose');

exports.mongooseconnection = async () =>{
    try{
        await mongoose.connect(process.env.mongourl);
        console.log("connection stable");
    }catch (error) {
        console.log("error message")
    }
}

//  mongoose.connect().then().catch();
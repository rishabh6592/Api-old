require("dotenv").config({path:"./.env"})
const express = require("express")
const app = express()

const indexRouter = require("./routes/indexRouter")

require("./models/connect").mongooseconnection();

app.listen(process.env.PORT,() => {
    console.log(`server run on port ${process.env.PORT}`);

    
});





















//    app.use(require("morgan")("combined"))



    // send--text message
    // json--data json
    // res--sending the data to frontend
    // req--getting data from frontend
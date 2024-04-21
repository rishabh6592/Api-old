const express = require("express");
const router = express.Router();


const {home,register} = require("../controllers/indexcontroller")

router.get("/", home)

router.post("/register",register)




















router.get("/", home);




router.post("/register", register);

// router.route("/").get((req,res,next)=>{})

module.exports = router;
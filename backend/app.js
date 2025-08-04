require("dotenv").config({quiet:true});
const express = require("express");
const app = express();
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
};

main().then(()=>console.log("Database is connected")).catch((error)=>console.log(error));

app.listen(process.env.PORT,(req,res)=>{
    console.log("App is listening");
});
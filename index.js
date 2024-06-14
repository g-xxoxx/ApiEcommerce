const express = require("express");
const mongoose = require('mongoose')
const app = express();
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
    .then(() => console.log(`DB Connection Successfull with ${process.env.PORT}!`))
    .catch((err) => {
        console.log("Err");
    });

app.listen(process.env.PORT || 8081, () => {
    console.log("Backend server is running...")
})
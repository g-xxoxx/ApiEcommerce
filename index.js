const express = require("express");
const mongoose = require('mongoose')
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/user")

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
    .then(() => console.log(`DB Connection Successfull with ${process.env.PORT}!`))
    .catch((err) => {
        console.log("Err");
    });

app.use(express.json())
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 8081, () => {
    console.log("Backend server is running...")
})
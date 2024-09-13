//importing express

const express = require("express");

const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");

//importing mongoose
const mongoose = require("mongoose");

//importing dotenv to create environment variable
const dotenv = require("dotenv");

// to configure environment variables in your project.
dotenv.config();

//connection build to database server through connection string saved in env file for security purpose
//env file added to git ignore file before commit
mongoose.connect(process.env.MONGO_URL)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( userRouter);
app.use( authRouter);







app.listen(3000, () => {
  console.log("Server is listening to port: 3000");
})
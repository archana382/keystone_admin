const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors =  require("cors")
const app = express();
const errorMiddleware = require("./middleware/error");
const dotenv = require("dotenv");

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Config
dotenv.config({path:"backend/config/config.env"});

//Route Imports
const user = require("./routes/userRoute")
const student = require("./routes/studentRoute");


const upload = require("./controllers/uploadController")

app.use('/files', express.static('files'));

app.use("/api/v1", user);

app.use("/api/v1", student);

app.use("/api/v1", upload)


app.use(errorMiddleware);

module.exports = app;


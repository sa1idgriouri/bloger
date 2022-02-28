/* eslint-disable prettier/prettier */
const express = require('express');
const app = express()
var bodyParser = require('body-parser')
const cors = require("cors")
const fileupload = require("express-fileupload");
const path = require("path")


// --------------import----------------------
const sequelize = require("./config/connection")
const db = require("./models")


// --------------Config ----------------------
require('dotenv').config()

// --------------import Route ----------------------
const categoryRoute = require('./routers/categorie')
const postRoute = require("./routers/post")
const commentRoute = require("./routers/comment")

// --------------Mddlewares ----------------------
app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.use("/images", express.static(path.join(__dirname, "/images")));


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('not nonnect to the database !:', err);
    });






// -------------- Route ----------------------
app.use("/api/categorie", categoryRoute)
app.use("/api/post", postRoute)
app.use("/api/comment", commentRoute)
// -------------- Env ----------------------
const PORT = process.env.PORT || 5000

db.sequelize.sync().then(() => {
    app.listen(PORT, () => { console.log(`server is runnig in PORT ${PORT}`) });
})




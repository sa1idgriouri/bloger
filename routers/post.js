/* eslint-disable prettier/prettier */
const express = require("express");
const multer = require("multer");

const route = express.Router();


const { getAllPosts, addPost, deletePost, updatePost, getOnePost, getAllPostsAdmin } = require("../controllers/postsController");


route.get("/", getAllPosts);
route.get("/all", getAllPostsAdmin);
route.get("/:slug", getOnePost)

route.post("/add", addPost)

route.delete("/:idPost", deletePost)

route.put("/:idPost", updatePost)


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "client/public/Images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });

route.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});




module.exports = route;
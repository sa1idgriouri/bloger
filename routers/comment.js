/* eslint-disable prettier/prettier */
const express = require("express")
const { getAllCommentByPost, addComment, getAllComment } = require("../controllers/commentController")

const route = express.Router()

route.get("/", getAllComment)
route.get("/:idPost", getAllCommentByPost)

route.post("/add", addComment)



module.exports = route
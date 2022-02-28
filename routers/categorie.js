/* eslint-disable prettier/prettier */

const express = require("express")

const route = express.Router()
const { getAllCategorie, addCategorie, deleteCategorie, findCategorieById, updateCategorie } = require("../controllers/categorieController")

route.get("/", getAllCategorie)

route.post("/add", addCategorie)

route.delete("/:slug", deleteCategorie)

route.put("/:slug", updateCategorie)

route.param("slug", findCategorieById)





module.exports = route
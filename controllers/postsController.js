/* eslint-disable prettier/prettier */
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
// image Upload
const multer = require('multer')
const path = require('path')

const { Posts, Categories } = require("../models")


exports.getAllPosts = async (req, res) => {
    let sortBy = req.query.SortBy ? req.query.SortBy : "id";
    let limit = req.query.Limit ? parseInt(req.query.Limit) : 100;
    let orderby = req.query.order ? req.query.order : "desc";
    let category = req.query.category ? req.query.category : "%"

    let query = {}
    // let { search, category } = req.query

    // if (search) {
    //     query.name = { $regex: search, $options: 'i' }
    // }


    try {
        const posts = await Posts.findAll({
            include:
            {
                model: Categories,
                where: {

                    name: { [Op.like]: category }
                }


            },

            order: [[sortBy, orderby]],
            limit: limit

        })
        if (!posts) {
            return res.status(404).send("Pots Not Found")
        }
        else
            return res.status(200).send(posts)
    }

    catch (err) {
        res.status(500).json({ errors: err.message })
    }


}



exports.getAllPostsAdmin = async (req, res) => {
    let sortBy = req.query.SortBy ? req.query.SortBy : "id";
    let limit = req.query.Limit ? parseInt(req.query.Limit) : 100;
    let orderby = req.query.order ? req.query.order : "desc";
    let category = req.query.category ? req.query.category : "%"

    let query = {}
    // let { search, category } = req.query

    // if (search) {
    //     query.name = { $regex: search, $options: 'i' }
    // }


    try {
        const posts = await Posts.findAll({
            include:
            {
                model: Categories,
            },

            order: [[sortBy, orderby]],
            limit: limit

        })
        if (!posts) {
            return res.status(404).send("Pots Not Found")
        }
        else
            return res.status(200).send(posts)
    }

    catch (err) {
        res.status(500).json({ errors: err.message })
    }


}

exports.getAllPostsByCategorie = async (req, res) => {
    const categorieId = req.params.CategoryId
    try {
        const posts = await Posts.findAll({
            where: {
                CategoryId: categorieId
            }
        })
        if (!posts) {
            return res.status(404).send("Pots Not Found")
        }
        else
            return res.status(200).json({ posts })
    }

    catch (err) {
        res.status(500).json({ errors: err.message })
    }
}


exports.addPost = async (req, res) => {


    // let Post = {

    //     title: req.body.title,
    //     description: req.body.description,
    //     slug: req.body.slug,
    //     CategoryId: 2,
    //     UserId: req.body.UserId,
    //     image: path.name,
    // }

    try {


        const newPost = await Posts.create(req.body)
        res.status(200).json({ posts: newPost })


    }
    catch (err) {
        res.status(500).json({ errors: err.message })
    }

}



exports.updatePost = async (req, res) => {
    const postId = req.params.idPost

    const Title = req.body.title;
    const Description = req.body.description;
    const slug = req.body.slug;
    const categoireId = req.body.CategoryId;
    const userId = req.body.UserId

    try {

        const postUpdate = await Posts.update({ title: Title, description: Description, slug: slug, CategoryId: categoireId, UserId: userId }, {
            where: {
                id: postId
            }
        })

        res.status(200).send(postUpdate)

    }
    catch (err) {
        res.status(500).json({ errors: err.message })

    }

}





exports.deletePost = async (req, res) => {
    const postId = req.params.idPost

    try {
        await Posts.destroy({
            where: {
                id: postId
            }
        })

        res.status(200).send("Post Delete")


    }
    catch (err) {
        res.status(500).json({ errors: err.message })
    }
}



exports.getOnePost = (req, res) => {
    const id = req.params.slug

    console.log(id)
    try {

        Posts.findOne({
            where: {
                slug: id
            }
        }).then(post => {

            if (!post) {
                return res.status(400).send("Post Not Found")
            }
            else {

                res.status(200).json({ post })
            }
        })
    }

    catch (err) {
        return res.status(500).json({ errors: err.message })
    }
}


//Upload Image Controller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})




/* eslint-disable prettier/prettier */
const { Comments } = require("../models")

exports.getAllComment = async (req, res) => {

    try {
        const allComment = await Comments.findAll()

        if (!allComment) {
            return res.status(400).send("Not Comments")
        }
        else
            return res.status(200).send(allComment)
    }


    catch (err) {
        return res.status(500).json({ errors: err.message })
    }

}


exports.getAllCommentByPost = async (req, res) => {
    const postId = req.params.idPost
    try {
        const allComment = await Comments.findAll({
            where: {
                PostId: postId
            }
        })

        if (!allComment) {
            return res.status(400).send("Not Comments")
        }
        else
            return res.status(200).send(allComment)
    }


    catch (err) {
        return res.status(500).json({ errors: err.message })
    }

}

exports.addComment = async (req, res) => {
    const command = req.body

    try {
        const newComment = await Comments.create(command)

        res.status(200).send(newComment)

    } catch (err) {
        return res.status(500).json({ errors: err.message })
    }
}


exports.deleteComment = async (req, res) => {

}



exports.updateComment = async (req, res) => {

}
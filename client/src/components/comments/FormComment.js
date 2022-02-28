/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import TextInputGroup from 'src/helpers/InputGroup'
import { addComment } from '../core/apiCore'
import "./comments.css"

import PropTypes from 'prop-types'

function FormComment(props) {
    const { postId } = props



    const [comment, setComments] = useState({
        username: "",
        email: "",
        commintText: "",
        PostId: parseInt(postId)

    })

    const onchnge = (e) => {
        setComments({ ...comment, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const newComment = {
            username: comment.username,
            email: comment.email,
            commintText: comment.commintText,
            PostId: parseInt(postId)

        }

        addComment(newComment).then(res => {
            setComments({
                username: "",
                email: "",
                commintText: "",
                PostId: 9
            })
        })
    }
    return (
        <>

            <form onSubmit={onSubmit}>
                <div className="input-group group">
                    <div className="form-group   formComment">
                        <TextInputGroup
                            label="UserName"
                            name="username"
                            onChange={onchnge}
                            type='text'
                            placeholder="Enter Name"

                        />

                    </div>

                    <div className="form-group">
                        <TextInputGroup
                            label="Email"
                            name="email"
                            type='email'
                            onChange={onchnge}
                            placeholder="Enter Email"


                        />

                    </div>


                </div>


                <div className="form-group">
                    <label htmlFor="description">Comments</label>

                    <textarea rows="10" onChange={onchnge} name="commintText" cols="50" placeholder="Enter description" row="50" col="100" className="form-control">
                        Comments
                    </textarea>
                </div>

                <div className="form-group">

                    <input
                        type="submit"
                        value="Add Comments"

                        className="btn btn-primary btn-block mt-2"
                    />
                </div>

            </form>
        </>
    )
}
FormComment.propTypes = {
    postId: PropTypes.string
}

export default FormComment
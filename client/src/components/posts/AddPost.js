/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import TextInputGroup from 'src/helpers/InputGroup'
import { connect } from 'react-redux';
import { addPost } from "../../actions/postActions"
import PropTypes from 'prop-types'

import { getCategory } from '../core/apiCore';
import axios from "axios";

import { Url } from "../../config/config"

const AddPost = (props) => {


    const [file, setFile] = useState(null);



    const [category, setCategory] = useState([])
    const [post, setPost] = useState({
        title: "",
        Author: "mohmad",
        slug: "",
        CategoryId: "",
        Status: "",
        UserId: 1,
        description: "",
        Date: new Date(),
        image: "",
        errors: {}
    })

    useEffect(() => {
        getCategory().then(category => setCategory(category))
    }, [])

    const [formData, setFormData] = useState(new FormData())


    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {

        e.preventDefault()

        // if (post.title == "") {
        //     this.setPost({ errors: { title: 'Name is required' } });
        //     return;
        // }

        // if (post.slug == "") {
        //     this.setPost({ errors: { slug: 'Name is required' } });
        //     return;
        // }

        const newPost = {
            title: post.title,
            Author: "mohmad",
            slug: post.slug,
            CategoryId: post.CategoryId,
            Status: post.Status,
            description: post.description,
            image: null,
            UserId: 1,
            Date: new Date(),

        }

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image = filename;
            try {
                await axios.post(`${Url}post/upload`, data);
            } catch (err) { }

            props.addPost(newPost)
                .then(posts => console.log("Succus"))
                .catch(errr => console.error(errr))




            setPost({
                title: "",
                Author: "mohmad",
                slug: "",
                Categorie: "",
                Status: "",
                description: "",
                Date: new Date(),
                errors: {}
            })

            props.history.push("/post")
        }
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <TextInputGroup
                            label="title"
                            name="title"
                            placeholder="Enter Name"
                            defaultValue={post.title}
                            onChange={onChange}
                            error={post.errors.title}
                        />

                        <div className="form-group">
                            <label htmlFor="description">description</label>

                            <textarea rows="20" cols="80" onChange={onChange} placeholder="Enter description" row="50" col="100" className="form-control" name="description">

                            </textarea>
                        </div>


                        <div className="form-group">
                            <label htmlFor="description">Categories</label>
                            <select className="form-control" name="CategoryId" onChange={onChange}>
                                <option>...............</option>

                                {category.map(cat =>
                                    <>
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    </>

                                )}
                            </select>

                        </div>



                        <TextInputGroup
                            label="slug"
                            name="slug"
                            placeholder="Enter slug"
                            defaultValue={post.slug}
                            onChange={onChange}
                            error={post.errors.slug}
                        />



                        <div className="form-group">
                            <label htmlFor="description">Status</label>
                            <select className="form-control" name="Status" onChange={onChange}>
                                <option value="0"></option>
                            </select>



                        </div>

                        <TextInputGroup
                            id="photo"
                            label="Image"
                            name="image"
                            placeholder="Enter Name"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />


                        <div className="form-group">
                            <input
                                type="submit"
                                value="Add Post"

                                className="btn btn-primary form-control  btn-block mt-2"
                            />
                        </div>
                    </form>
                </div>

                {category.CategoryId}
            </div >
        </div >
    )
}

AddPost.propTypes = {
    addPost: PropTypes.func,
    history: PropTypes.func
}

export default connect(null, { addPost })(AddPost)

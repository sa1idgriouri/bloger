/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from "../../actions/postActions"
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

import { getPostsAdmin } from './Api/coreApi';


const AllPost = props => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsAdmin()
            .then(post => setPosts(post))
            .catch(err => console.log(err))



    }, [])

    const onDeleteClick = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: 'You will Delete Post!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Delete Post',
                    'success'
                )
                props.deletePost(id)
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }


    return (

        <React.Fragment>
            <div className="mb-3">
                <div className="button_Add">
                    <button type="button" className="btn btn-primary btn-lg">
                        <Link to="/dashboard/post/add" style={{ color: "white" }}>
                            <i className="fa fa-plus"></i>
                        </Link>
                    </button>
                </div>
                <div className="search"></div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Categories</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map(post =>
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.Category.name}</td>
                            <td>{post.description.substr(0, 50)}</td>
                            <td>{post.status}</td>
                            <td>
                                <Moment format="YYYY/MM/DD">
                                    {post.Date}
                                </Moment>
                            </td>
                            <td>

                                <i style={{
                                    color: "red",
                                    fontSize: "20px",
                                    padding: "0px 10px",
                                    float: "left",
                                    cursor: "pointer"


                                }}
                                    className="fa fa-trash"
                                    onClick={onDeleteClick.bind(this, post.id)}
                                ></i>

                                <i
                                    style={{
                                        color: "orange",
                                        fontSize: "20px",
                                        padding: "0px 10px",
                                        float: "left",
                                        cursor: "pointer"
                                    }}
                                    className="fa fa-pencil"></i>

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}



AllPost.propTypes = {
    getPosts: PropTypes.func,
    Posts: PropTypes.object,
    deletePost: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        Posts: state.myPosts.Posts
    }
}

export default connect(mapStateToProps, { deletePost })(AllPost)

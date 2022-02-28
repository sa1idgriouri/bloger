/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getAllComments } from '../core/apiCore'
import Moment from 'react-moment';

function AllComments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllComments()
            .then(res => setComments(res))
    })
    return (
        <React.Fragment>


            <div className="mb-3">
                <div className="button_Add">
                    <button type="button" className="btn btn-primary btn-lg">
                        <Link to="/dashboard/categorie/add" style={{ color: "white" }}>
                            <i className="fa fa-plus"></i>
                        </Link>
                    </button>
                </div>
                <div className="search"></div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Comments</th>
                        <th>Date</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {comments.map(comment =>
                        <tr key={comment.id}>
                            <td>{comment.username}</td>
                            <td>{comment.email}</td>
                            <td>{comment.commintText}</td>

                            <td>
                                <Moment format="YYYY/MM/DD">
                                    {comment.createdAt}
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

                                ></i>
                                <Link>
                                    <i
                                        style={{
                                            color: "orange",
                                            fontSize: "20px",
                                            padding: "0px 10px",
                                            float: "left",
                                            cursor: "pointer"
                                        }}
                                        className="fa fa-pencil"></i>
                                </Link >

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment >
    )
}

export default AllComments
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Card from "src/helpers/Card"
import { getPosts } from "../components/core/apiCore"




import "./home.css"

function Sport(props) {


    const [listPosts, setListPosts] = useState([])
    const [Post, setPost] = useState([])

    useEffect(() => {

        getPosts({ order: "asc", Limit: 6, category: "Javascript" }).then(posts => setListPosts(posts))
        getPosts({ order: "desc", Limit: 1, SortBy: "createdAt" }).then(post => setPost(post))

    }, [])
    return (
        <div className="container">


            <div className="section-title mt-5 mb-5">
                <h2><span>Javascript</span></h2>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {listPosts.map(post =>
                            <>
                                <div className="col-md-6 col-lg-6">
                                    <Card key={post.id} posts={post} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    {Post.map(post =>
                        <>
                            <div className="last_Post">
                                <img src={`/Images/${post.image}`} alt={post.title} />
                            </div>
                            <div className="last_body m-3">

                                <p className="title_b">{post.description.slice(0, 400)}</p>
                            </div>
                        </>
                    )}


                </div>
            </div>
        </div>
    )
}



export default Sport
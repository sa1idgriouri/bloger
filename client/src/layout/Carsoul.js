/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { getPosts } from "../components/core/apiCore"

import './home.css'

function Carsoul() {

    const [listPosts, setListPosts] = useState([])

    useEffect(() => {
        getPosts({ order: "asc", Limit: 1, SortBy: "createdAt" }).then(posts => setListPosts(posts))
    }, [])
    return (

        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {
                        listPosts.map(post =>
                            <>
                                <div className="carousel-item active">
                                    <img src={`/Images/${post.image}`} className="d-block w-100" alt={post.title} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{post.title}</h5>
                                        <p>{post.description.substr(0, 50)}</p>
                                    </div>
                                </div>
                            </>

                        )
                    }
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





        </>
    )
}

export default Carsoul
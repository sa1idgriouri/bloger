/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import Card from 'src/helpers/Card'
import "./home.css"
import { getPosts } from "../components/core/apiCore"
function LesPlusRegardes() {
    const [listPost, setListPost] = useState([])

    useEffect(() => {

        getPosts({ order: "asc", Limit: 8, SortBy: "updatedAt" }).then(posts => setListPost(posts))

    }, [])

    return (
        <div className="container mt-4">


            <div className="section-title mt-5 mb-5">
                <h2><span>Les Plus Regardes</span></h2>
            </div>

            <div className="row mb-5 mb-5">
                {listPost.map(post =>
                    <>
                        <div className="col-md-4 mb-5">
                            <Card key={post.id} posts={post} />

                        </div>
                    </>
                )}

            </div>

        </div>
    )
}

export default LesPlusRegardes
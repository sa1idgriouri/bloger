/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getPosts } from "../components/core/apiCore"

import PropTypes from 'prop-types'



import "./home.css"

function Sibbar(props) {

    const [listPosts, setListPosts] = useState([])



    useEffect(() => {
        getPosts({ order: "desc", SortBy: "createdAt", Limit: 4 }).then(posts => setListPosts(posts))

    }, [])

    return (
        <React.Fragment>

            {listPosts.map(post =>
                <>
                    <div className="sibar">
                        <div className="image">
                            <img src={`/Images/${post.image}`} alt={post.title} />
                        </div>
                        <div className="paragraph">
                            <p>
                                {post.description.substr(0, 50)}
                            </p>
                        </div>
                    </div>
                </>
            )}





        </React.Fragment>
    )
}



export default Sibbar
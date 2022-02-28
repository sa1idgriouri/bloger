/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react'
import Card from 'src/helpers/Card'
import "./home.css"
import { connect } from "react-redux"
import { getPosts } from "../actions/postActions"
import PropTypes from 'prop-types'

function Politique(props) {

    const { listPosts } = props

    useEffect(() => {
        props.getPosts({ order: "asc", category: "Angular", Limit: 8 })

    }, [])
    return (
        <div className="container mt-5">
            <div className="section-title mt-5 mb-5">
                <h2><span>Angular</span></h2>
            </div>
            <div className="row mb-5">
                {listPosts.map(post =>
                    <>
                        <div className="col-md-4">
                            <Card key={post.id} posts={post} />
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listPosts: state.myPosts.Posts
    }
}
Politique.propTypes = {
    listPosts: PropTypes.object,
    getPosts: PropTypes.func
}

export default connect(mapStateToProps, { getPosts })(Politique)
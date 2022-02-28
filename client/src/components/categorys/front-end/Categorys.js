/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import { getPosts } from "../../../components/core/apiCore"
import Card from 'src/helpers/Card';
import Hero from '../../../layout/Hero';
import Footer from 'src/layout/Footer';
import Header from 'src/layout/Header';
import Sibbar from 'src/layout/Sibbar';

import { useParams } from "react-router-dom";



const Categorys = (props) => {

    const [listPost, setListPosts] = useState([])
    let { name } = useParams();



    useEffect(() => {
        getPosts({ order: "asc", category: name }).then(posts => setListPosts(posts))
    }, [props])
    return (
        <>
            <Header />

            <Hero />
            <div className="container" >

                <div className="row">
                    <div className="col-md-8">


                        <div className="section-title mt-5 mb-5">
                            <h2><span>{name}</span></h2>
                        </div>

                        <div className="row">

                            {listPost.map(post =>
                                <>
                                    <div className="col-md-6">
                                        <Card key={post.id} posts={post} />

                                    </div>
                                </>
                            )}

                        </div>

                    </div>
                    <div className="col-md-4 mt-5">
                        <div className="sidebar-box mt-5">
                            <div className="title_ mb-3">

                                <h2 >Les plus lus</h2>
                            </div>

                            <Sibbar />
                        </div>


                        <div className="sidebar-box">
                            <h3 className="heading">Categories</h3>
                            <ul className="categories">
                                <li><a href="#">Food <span>(12)</span></a></li>
                                <li><a href="#">Travel <span>(22)</span></a></li>
                                <li><a href="#">Lifestyle <span>(37)</span></a></li>
                                <li><a href="#">Business <span>(42)</span></a></li>
                                <li><a href="#">Adventure <span>(14)</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}




export default Categorys
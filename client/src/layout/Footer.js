/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import "./footer.css"
import { Link } from "react-router-dom"
import { getPosts } from "../components/core/apiCore"
function Footer() {

    const [listPosts, setListPosts] = useState([])
    const [Post, setPost] = useState([])

    useEffect(() => {

        getPosts({ order: "asc", Limit: 6 }).then(posts => setListPosts(posts))
        getPosts({ order: "desc", Limit: 2, SortBy: "createdAt" }).then(post => setPost(post))

    }, [])


    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="footer-widget">
                                <h3>Stay in touch</h3>
                                <div className="footer-widget-content">
                                    <a href="mailto:sales@example.com" className="contact-link">support@example.com</a>
                                    <a href="mailto:support@example.com" className="contact-link red"> support@example.com </a>
                                    <a href="tel:0121234" className="contact-link">000000000000000</a>
                                    <div className="footer-social">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-rss"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="footer-widget">
                                <h3>Latest Events</h3>
                                <div className="footer-widget-content">
                                    {Post.map(post =>
                                        <>
                                            <div className="media">
                                                <div className="media-left">
                                                    <Link to={post.slug}><img className="media-object" src={`/Images/${post.image}`} alt={post.title} /></Link>
                                                </div>
                                                <div className="media-body">
                                                    <p><Link to={post.slug}>{post.description.slice(0, 20)} </Link></p>
                                                    <span>September 30, 2022 </span>
                                                </div>
                                            </div>
                                        </>
                                    )}


                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4">
                            <div className="footer-widget">
                                <h3>Latest Events</h3>
                                <div className="footer-widget-content">
                                    <div className="images-gellary">
                                        <ul>
                                            {listPosts.map(post =>
                                                <>
                                                    <li><Link to="#"><img src={`/Images/${post.image}`} alt={post.title} /></Link></li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </footer>

            <div className="row vcenter">
                <div className="pull-left col-lg-12 col-xs-12">
                    <p>Copyright &copy;2022 by Said Griouri</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
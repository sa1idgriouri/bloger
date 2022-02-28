/* eslint-disable prettier/prettier */
import React from 'react'

import PropTypes from 'prop-types'
import Moment from 'react-moment';
import "./card.css"
import { Link } from 'react-router-dom'
function Card(props) {
    const { title, description, image, slug, createdAt } = props.posts







    return (
        <div>
            {/* <div classNameNameName="w3l-news" id="news">
                <section id="grids5-block" classNameNameName="py-5">



                    <div classNameNameName="grids5-info">
                        <Link to={`/${slug}`} classNameNameName="d-block zoom">


                            {image && <img classNameNameName="img-fluid news-image" src={`/Images/${image}`} alt={title} />}

                        </Link>
                        <div classNameNameName="blog-info">
                            <h4><a href="#blog-single">{title.substr(0, 50)} .....</a></h4>
                            <p classNameNameName="date"><span classNameNameName="fa fa-calendar mr-2"></span> <Moment format="MMMM DD YY">
                                {createdAt}
                            </Moment></p>
                            <p>{description.substr(0, 60)}</p>
                        </div>
                    </div>




                </section>
            </div> */}

            <div className="graybg">

                <div className="row listrecent listrelated">


                    <div classNameName="col-md-4">
                        <div classNameName="card">
                            <Link to={`/${slug}`}>
                                <img classNameName="img-fluid img-thumb" src={`/Images/${image}`} alt={title} />
                            </Link>
                            <div className="card-block">
                                <h2 className="card-title"><Link to={`/${slug}`}>{title}</Link></h2>
                                <div className="metafooter">
                                    <div className="wrapfooter">
                                        <span className="meta-footer-thumb">
                                            <a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal" /></a>
                                        </span>
                                        <span className="author-meta">
                                            <span className="post-name"><a href="author.html">Sal</a></span><br />
                                            <span className="post-date">22 July 2017</span><span className="dot"></span><span className="post-read">6 min read</span>
                                        </span>
                                        <span className="post-read-more"><a href="post.html" title="Read Story"><svg className="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" ></path></svg></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

            </div>


        </div >
    )
}

Card.propTypes = {
    posts: PropTypes.object
}

export default Card
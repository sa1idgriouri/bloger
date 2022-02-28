/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from 'src/layout/Footer'
import Header from 'src/layout/Header'
import "./deatils.css"
import { Url } from "../../../config/config"
import { useParams } from "react-router-dom"

import Sibbar from "../../../layout/Sibbar"
import FormComment from "src/components/comments/FormComment"
import { getComments, getPosts } from 'src/components/core/apiCore'

function DeatilsPost(props) {

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const { slug } = useParams()

  let postId = 0

  const getPosts = () => {
    return fetch(`${Url}post/${slug}`)
      .then(res => res.json())
      .then(res => {
        setPost(res.post)
        postId = res.post.id

      })
  }

  const geAlltComments = (slug) => {
    getComments(slug).then(comment => setComments(comment))
  }

  useEffect(() => {

    getPosts().then(() =>
      geAlltComments(postId)
    )



  }, [props])





  return (
    <>
      <Header />
      <div className="container  mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="mb-4">{post.title}</h2>
            <div className="image-card">
              <img src={`/Images/${post.image}`} alt={post.title} />
            </div>


            <div className="body-content">
              <p>
                {post.description}
              </p>



              <div className="row ">
                <div className="panel panel-default widget">
                  <div className="panel-heading mb-5">
                    <span className="glyphicon glyphicon-comment" />
                    <h3 className="panel-title">
                      Recent Comments</h3>
                    <span className="label label-info">
                      78</span>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group mb-2">
                      {comments.map(comment =>

                        <>
                          <li className="list-group-item">
                            <div className="row">



                              <div className="col-xs-2 col-md-1">
                                <a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal" /></a>
                              </div>
                              <div className="col-xs-10 col-md-11">
                                <div>
                                  <a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">Admin Panel Quick Shortcuts</a>
                                  <div className="mic-info">
                                    By: <a href="#">{comment.username}</a> on 11 Nov 2013
                                  </div>
                                </div>
                                <div className="comment-text">
                                  {comment.commintText}
                                </div>
                                <div className="action">
                                  <button type="button" className="btn btn-primary btn-xs m-2" title="Edit">
                                    <i className="fa fa-pencil" ></i>

                                  </button>
                                  <button type="button" className="btn btn-danger btn-xs" title="Delete">
                                    <i className="fa fa-trash" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </>

                      )}



                    </ul>
                    {/* <a href="#" className="btn btn-primary btn-sm btn-block" role="button"><span className="glyphicon glyphicon-refresh" /> More</a> */}
                  </div>
                </div>
              </div>
            </div>


            <div className="sidebar-box mt-5">
              <FormComment postId={post.id} />
            </div>






          </div>
          <div className="col-md-4 mt-5">

            <div className="sidebar-box">
              <h3 className="heading">Popular Posts</h3>
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


            <div className="sidebar-box">
              <h3 className="heading">Tags</h3>
              <ul className="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Freelancing</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Freelancing</a></li>
              </ul>
            </div>

          </div>
        </div >
      </div >

      <Footer />
    </>


  )
}

export default DeatilsPost
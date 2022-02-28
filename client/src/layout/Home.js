/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import Carsoul from './Carsoul'
import Footer from './Footer'
import Header from './Header'
import Sibbar from './Sibbar'
import "./home.css"
import Card from 'src/helpers/Card'
import Politique from './Politique'
import Sport from './Sport'
import LesPlusRegardes from './LesPlusRegardes'
import { getPosts } from 'src/components/core/apiCore'


function Home(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts({ order: "desc", Limit: 3, SortBy: "createdAt" }).then(posts => { console.log(posts); setPosts(posts) })

    }, [props])

    return (
        <div>
            <Header />

            <div className="container mt-2">
                <div className="grid mb-5">
                    <div className="ml-3" style={{ marginRight: "12px" }}>
                        <Carsoul />
                    </div>
                    <div>
                        <Sibbar />
                    </div>
                </div>
            </div>

            <div className="container mt-5">

                <div className="section-title mt-5 mb-5">
                    <h2><span>New Posts</span></h2>
                </div>


                <div className="row">
                    {posts.map(post =>
                        <>
                            <div className="col-md-4 col-lg-4">
                                <Card key={post.id} posts={post} />
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Sport />

            <Politique />

            <LesPlusRegardes />

            <Footer />
        </div>
    )
}

export default Home
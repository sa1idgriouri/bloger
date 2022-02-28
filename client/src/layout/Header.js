/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategory } from "../actions/categoryAction";
import { Link } from "react-router-dom";

const Header = (props) => {
    const { Categories } = props;

    const [category, setCategory] = useState([])

    useEffect(() => {
        props.getCategory();


    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {Categories.map(category =>
                            <li className="nav-item" key={category.id}>
                                <Link key={category.id} className="nav-link" aria-current="page" to={`/category/${category.slug}`}>{category.name}</Link>
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    Categories: PropTypes.object,
    getCategory: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        Categories: state.categorys.Categories
    }
}

export default connect(mapStateToProps, { getCategory })(Header)
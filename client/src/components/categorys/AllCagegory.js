/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { getCategory, deleteCategory } from 'src/actions/categoryAction';




const AllCagegory = props => {


    const { Categories } = props
    useEffect(() => {

        props.getCategory()

    }, [])

    const onDeleteClick = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: 'You will Delete Post!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Delete Post',
                    'success'
                )
                props.deleteCategory(id)
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }


    return (
        <React.Fragment>


            <div className="mb-3">
                <div className="button_Add">
                    <button type="button" className="btn btn-primary btn-lg">
                        <Link to="/dashboard/categorie/add" style={{ color: "white" }}>
                            <i className="fa fa-plus"></i>
                        </Link>
                    </button>
                </div>
                <div className="search"></div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {Categories.map(category =>
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>

                            <td>
                                <Moment format="YYYY/MM/DD">
                                    {category.Date}
                                </Moment>
                            </td>
                            <td>

                                <i style={{
                                    color: "red",
                                    fontSize: "20px",
                                    padding: "0px 10px",
                                    float: "left",
                                    cursor: "pointer"


                                }}
                                    className="fa fa-trash"
                                    onClick={onDeleteClick.bind(this, category.id)}
                                ></i>
                                <Link to={`/dashboard/categorie/edit/${category.id}`}>
                                    <i
                                        style={{
                                            color: "orange",
                                            fontSize: "20px",
                                            padding: "0px 10px",
                                            float: "left",
                                            cursor: "pointer"
                                        }}
                                        className="fa fa-pencil"></i>
                                </Link >

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment >
    )
}



AllCagegory.propTypes = {
    Categories: PropTypes.object,
    getCategory: PropTypes.func,
    deleteCategory: PropTypes.func

}

const mapStateToProps = (state) => {

    return {
        Categories: state.categorys.Categories
    }
}

export default connect(mapStateToProps, { getCategory, deleteCategory })(AllCagegory)
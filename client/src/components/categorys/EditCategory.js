/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import TextInputGroup from '../../helpers/InputGroup';
import { addCategory } from '../../actions/categoryAction';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import toastr from 'reactjs-toastr';

class AddCategory extends Component {
    state = {
        id: "",
        name: '',
        description: "",
        errors: {}
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { id, name, description } = this.state;

        // Check For Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }



        const newCategory = {
            name,
            description
        };

        //// SUBMIT CONTACT ////
        this.props.addCategory(newCategory)


        // Clear State
        this.setState({
            name: '',
            description: '',
            errors: {}
        });
        toastr.success('Success Message', 'Title')

        this.props.history.push("/categorie")
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, description, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup
                            label="Name"
                            name="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={this.onChange}
                            error={errors.name}
                        />

                        <div className="form-group">
                            <label htmlFor="Description">Description</label>

                            <textarea onChange={this.onChange} row="50" col="100" className="form-control" name="description">
                                {description}
                            </textarea>
                        </div>


                        <input
                            type="submit"
                            value="Add Categrie"

                            className="btn btn-warning btn-block mt-2"
                        />
                    </form>
                </div>
            </div >
        );
    }
}
AddCategory.propTypes = {
    addCategory: PropTypes.func,
    history: PropTypes.func
}


export default connect(null, { addCategory })(AddCategory);

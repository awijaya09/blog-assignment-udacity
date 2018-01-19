import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewPost } from '../actions/index';
import FormField from './FormField';

class PostNew extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    renderField(field) {
        return (
            <FormField field={field} />
        )
    }

    onSubmit(values) {
        values['timestamp'] = Date.now();
        values['id'] = Date.now();

        // Redirect to homepage once the post has been sent.
        this.props.createNewPost(values, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="row">
                <div className="blog-header">
                        <div className="container">
                            <h1 className="blog-title">Create New Post</h1>
                        </div>
                </div>
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                label="Title"
                                placeholder="Enter the post title"
                                id="postTitle"
                                name="title"
                                component={this.renderField}
                            />
                            <Field
                                label="Author"
                                placeholder="Author name"
                                id="postAuthor"
                                name="author"
                                component={this.renderField}
                            />
                            <Field
                                label="Category"
                                placeholder="Choose a category"
                                id="postCat"
                                name="category"
                                defaultValue="react"
                                component={this.renderField}
                            />
                            <Field
                                label="Content"
                                id="postBody"
                                name="body"
                                component={this.renderField}
                            />
                            
                            <div className="form-group row">
                                <label htmlFor="buttonSubmit" className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button id="buttonSubmit" type="submit" className="btn btn-primary">Submit</button>
                                    <Link to="/" className="btn btn-danger">Cancel</Link>
                                </div>
                            </div>
                            
                    </form>
                </div>
            </div>
        )
    }
}

function validate(values) {
    // The values comes from the fields in the redux form
    const errors = {};

    if(!values.title || values.title.length < 5) {
        errors.title = "Enter a title with at least 5 characters!";
    }
    // If errors is empty, the form is good to go
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewPostForm',
})(
    connect(null, { createNewPost })(PostNew)
);
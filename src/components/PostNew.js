import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostNew extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    showInput(field) {
        const classString = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : '' }`;
        return(
            <input 
                type="text"
                id={field.id}
                className={classString}
                placeholder={field.placeholder}
                value={field.value}
                {...field.input}
            />
        )
    }

    showTimestamp(field) {
        const time = Date.now();
        return (
            <input 
                type="text"
                id={field.id}
                className="form-control"
                value={time}
                disabled
                {...field.input}
            />
        )
        
    }
    showOption(field) {
        return (
            <select 
                id={field.id}
                className="form-control"
                {...field.input}
            >
                <option>react</option>
                <option>redux</option>
                <option>udacity</option>
            </select>
        )
    }

    showTextarea(field) {
        return (
            <textarea 
                id={field.id}
                className="form-control"
                {...field.input}
            />
        )
       
    }

    renderField(field) {
        return (
            <div className="form-group row  has-danger">
                <label htmlFor={field.id} className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    {field.id === "postTitle" ? this.showInput(field) : null}
                    {field.id === "postAuthor" ? this.showInput(field): null}
                    {field.id === "postCat" ? this.showOption(field) : null}
                    {field.id === "postBody" ? this.showTextarea(field) : null}
                    {field.id === "postTime" ? this.showTimestamp(field) : null}
                    <div className="invalid-feedback">
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
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
                                component={this.renderField}
                            />
                            <Field
                                label="Content"
                                id="postBody"
                                name="body"
                                component={this.renderField}
                            />
                            <Field
                                label="Timestamp"
                                id="postTime"
                                name="time"
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
})(PostNew);
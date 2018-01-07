import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    showInput(field) {
        return(
            <input 
                type="text"
                id={field.id}
                className="form-control"
                placeholder={field.placeholder}
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
            <div className="form-group row">
                <label htmlFor={field.id} className="col-sm-2 col-form-label">{field.label}</label>
                <div className="col-sm-10">
                    {field.id === "postTitle" ? this.showInput(field) : null}
                    {field.id === "postCat" ? this.showOption(field) : null}
                    {field.id === "postBody" ? this.showTextarea(field) : null}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                <div className="blog-header">
                        <div className="container">
                            <h1 className="blog-title">Create New Post</h1>
                        </div>
                </div>
                <div className="col-sm-8">
                    <form>
                            <Field
                                label="Title"
                                placeholder="Enter the post title"
                                id="postTitle"
                                name="postTitle"
                                component={this.renderField}
                            />
                            <Field
                                label="Category"
                                placeholder="Choose a category"
                                id="postCat"
                                name="postCat"
                                component={this.renderField}
                            />
                            <Field
                                label="Content"
                                id="postBody"
                                name="postBody"
                                component={this.renderField}
                            />
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewPostForm',
})(PostNew);
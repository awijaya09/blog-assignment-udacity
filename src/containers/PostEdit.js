import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editPost, getPost } from '../actions/index';
import FormField from '../components/FormField';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    componentDidMount() {
        console.log("Getting data")
        this.props.getPost(this.props.match.params.id);
    }

    renderField(field) {
        return (
            <FormField field={field} />
        )
    }

    onSubmit(values) {
        const { post } = this.props
        const url_return = "/" + values['category'] + "/" + post.id
        this.props.editPost(this.props.post.id, values, (payload) => {
            this.props.history.push(url_return)
            return payload
        });
    }

    render() {
        const { handleSubmit } = this.props
        const { post } = this.props
        
        if(!post) {
            return <div>Loading data....</div>
        } 
        return (
            <div className="row">
                <div className="blog-header col-sm-12">
                        <div className="container">
                            <h1 className="blog-title">Edit Post</h1>
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
                                defaultValue={post.category}
                                component={this.renderField}
                            />
                            <Field
                                label="Content"
                                id="postBody"
                                name="body"
                                component={this.renderField}
                                defaultValue={post.body}
                            />
                            
                            <div className="form-group">
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

function mapStateToProps({ posts }, ownProps) {
    const { id } = ownProps.match.params;
    if (!posts[id]) {
        return {post: posts[id]};
    }
    return {
        post: posts[ownProps.match.params.id],
        initialValues: {
            title: posts[id].title,
            author: posts[id].author,
            category: posts[id].category,
            body: posts[id].body
        }
    };
}


function validate(values) {
    // The values comes from the fields in the redux form
    const errors = {};

    // If errors is empty, the form is good to go
    return errors;
}

export default connect(mapStateToProps, { editPost, getPost })(reduxForm({
    validate,
    enableReinitialize: true,
    form: 'EditPostForm',
})(PostEdit));
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    renderTitle(field) {
        return (
            <div className="col-sm-10">
                <input 
                    type="text"
                    id="postTitle"
                    class="form-control"
                    placeholder="Enter the Post Title"
                    {...field.input}
                />
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
                        <div className="form-group row">
                        <label htmlFor="postTitle" className="col-sm-2 col-form-label">Title</label>
                        <Field
                            name="postTitle"
                            component={this.renderTitle}
                        />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewPostForm',
})(PostNew);
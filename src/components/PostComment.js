import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { createNewComment, fetchComments } from '../actions/index';
import FormField from './FormField';

class PostComment extends Component {
    
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
        const { postID } = this.props;
        values['timestamp'] = Date.now();
        values['id'] = Date.now();
        values['parentId'] = postID;

        // Redirect to homepage once the post has been sent.
        this.props.createNewComment(values, (payload) => {
            this.props.fetchComments(postID);
            return payload
        });
    }

    render() {
        const { handleSubmit } = this.props
        return (
            
            <div className="col-sm-10 ">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="pt-4">
                    <div className="col-sm-12">
                        <Field
                            placeholder="Enter your comment"
                            id="commentBody"
                            name="body"
                            component={this.renderField}
                        />
                        <Field
                            placeholder="Author name"
                            id="commentAuthor"
                            name="author"
                            component={this.renderField}
                        />
                        <button id="buttonSubmit" type="submit" className="btn btn-primary mr-10">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    // The values comes from the fields in the redux form
    const errors = {};
    if(!values.author) {
        errors.title = "Enter an author name";
    }
    if(!values.body || values.body.length > 10) {
        errors.title = "Enter the comment body";
    }
    console.log("error: " + errors.title);
    // If errors is empty, the form is good to go
    return errors;
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('NewCommentForm'));

export default reduxForm({
    validate,
    form: 'NewCommentForm',
    onSubmitSuccess: afterSubmit,
})(
    connect(null, { createNewComment, fetchComments })(PostComment)
);
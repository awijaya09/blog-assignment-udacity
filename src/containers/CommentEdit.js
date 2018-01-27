import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editComment, fetchSingleComment } from '../actions/index';
import FormField from '../components/FormField';

class CommentEdit extends Component {
    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    componentDidMount() {
        if(!this.props.comment) {
            this.props.fetchSingleComment(this.props.match.params.id);
        }
    }


    renderField(field) {
        return (
            <FormField field={field} />
        )
    }


    onSubmit(values) {
        const { comment } = this.props;
        values['timestamp'] = Date.now();

        // Redirect to homepage once the post has been sent.
        this.props.editComment(comment.id, values, (payload) => {
            this.props.history.goBack()
            return payload
        });
    }

    render() {
        const { handleSubmit } = this.props;
        const { comment } = this.props;

        if(!comment) {
            return <div>Loading...</div>
        }

        return (
            
            <div className="col-sm-10 ">
                <div className="blog-header col-sm-12">
                        <div className="container">
                            <h4>Edit Comment</h4>
                        </div>
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="pt-4">
                    <div className="col-sm-12">
                        <Field
                            placeholder="Enter your comment"
                            id="commentBody"
                            name="body"
                            component={this.renderField}
                        />
                        <button id="buttonSubmit" type="submit" className="btn btn-primary mr-10">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ comments }, ownProps) {
    const { id } = ownProps.match.params;
    if(!comments[id]){
        return { comment: comments[ownProps.match.params.id]};
    }
    return {
        comment: comments[ownProps.match.params.id],
        initialValues: {
            body: comments[id].body,
        }
    }
} 

export default connect(mapStateToProps, { editComment, fetchSingleComment })(reduxForm({
    enableReinitialize: true,
    form: 'EditCommentForm'
})(CommentEdit));
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';

class CommentItem extends Component {

    constructor(props) {
        super(props);
        this.removeComment = this.removeComment.bind(this);
    }

    removeComment() {
        this.props.deleteComment(this.props.commentData.id, (payload) => {
            return payload
        });
    }

    render() {
        const { commentData } = this.props;
        return (
            <div className="col-sm-12 mt-3 border-bottom">
                <div className="blog-comment">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="col-sm-12">
                                <a className="btn btn-default"><i className="fa fa-angle-up"></i></a>
                            </div>
                            <div className="col-sm-12">
                                <span className="btn btn-default">{commentData.voteScore}</span>
                            </div>
                            <div className="col-sm-12">
                                <a className="btn btn-default"><i className="fa fa-angle-down"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <p className="mt-2">
                                <strong>{commentData.body}</strong>
                                <button type="button" class="close" aria-label="Close" onClick={this.removeComment}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </p>
                            <p className="blog-post-meta">
                                <strong>
                                    <Timestamp time={ commentData.timestamp/1000} format='full' />
                                </strong> by <Link to="/">{ commentData.author }</Link>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>        
        )
    }
}


export default connect(null, { deleteComment })(CommentItem);

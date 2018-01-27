import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVote, deletePost } from '../actions';
import Timestamp from 'react-timestamp';

class BlogItem extends Component {

    constructor(props) {
        super(props);
        this.removePost = this.removePost.bind(this);
    }

    handleVote(e, val){
        e.preventDefault();
        this.props.updateVote(this.props.post.id, 'posts/', val, (payload) => {
            this.props.onVoteUpdate();
            return payload
        });
    }
    removePost(){
        this.props.deletePost(this.props.post.id, (payload) => {
            this.props.onDeletePost();
            return payload
        });
    }

    render() {
        const postData = this.props.post
        return (
            <div className="card mb-2">
                <div className="card-body" >
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="col-sm-12">
                                <a className="btn btn-default" onClick={(e) => this.handleVote(e, 'upVote')}>
                                    <i className="fa fa-angle-up"></i>
                                </a>
                            </div>
                            <div className="col-sm-12">
                                <span className="btn btn-default">{postData.voteScore}</span>
                            </div>
                            <div className="col-sm-12">
                                <a className="btn btn-default" onClick={(e) => this.handleVote(e, 'downVote')}>
                                    <i className="fa fa-angle-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <Link to={`${postData.category}/${postData.id}`}><h3 className="card-title">{ postData.title }</h3></Link>
                            <p className="blog-post-meta">
                                <strong>
                                    <Timestamp time={ postData.timestamp/1000} format='full' />
                                </strong> by <Link to="#">{ postData.author }</Link>
                            </p>
                            <p className="card-text"> { postData.body } </p>
                            <Link to={`/${postData.category}`}><p> #{postData.category}</p></Link>

                            <button className="btn btn-outline-danger float-right" onClick={this.removePost}>Delete</button>
                            <Link className="btn btn-outline-info mr-3 float-right" to={`/${postData.category}/${postData.id}/edit`}>Edit</Link>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="mx-auto text-secondary" >{postData.commentCount} Comment(s)</span>
                    </li>
                </ul>
            </div>        
        )
    }
}

export default connect(null, { updateVote, deletePost })(BlogItem);
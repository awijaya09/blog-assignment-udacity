import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateVote } from '../actions';
import Timestamp from 'react-timestamp';

class BlogItem extends Component {

    constructor(props) {
        super(props);
        this.handleVote = this.handleVote.bind(this);
    }
    handleVote(e){
        e.preventDefault();
        console.log("updating vote for postid : " + this.props.post.id);
        this.props.updateVote(this.props.post.id, 'upVote');
    }

    render() {
        const postData = this.props.post
        return (
            <div className="card mb-2">
                <div className="card-body" >
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="col-sm-12"><a className="btn btn-default" onClick={this.handleVote}><i className="fa fa-angle-up"></i></a></div>
                            <div className="col-sm-12"><strong>{postData.voteScore}</strong></div>
                            <div className="col-sm-12"><i className="fa fa-angle-down"></i></div>
                        </div>
                        <div className="col-sm-10">
                            <Link to={`${postData.category}/${postData.id}`}><h3 className="card-title">{ postData.title }</h3></Link>
                            <p className="blog-post-meta">
                                <strong>
                                    <Timestamp time={ postData.timestamp/1000} format='full' />
                                </strong> by <Link to="/">{ postData.author }</Link>
                            </p>
                            <p className="card-text"> { postData.body } </p>
                            <Link to={`/${postData.category}`}><p> #{postData.category}</p></Link>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="#" className="mx-auto text-secondary" data-toggle="collapse" data-target="#collapseExample">{postData.commentCount} Comment(s)</Link>
                    </li>
                    <li className="collapse" id="collapseExample">
                        <div className="m-2">
                            Place the comment here
                        </div>
                    </li>
                </ul>
            </div>        
        )
    }
}

export default connect(null, { updateVote })(BlogItem);
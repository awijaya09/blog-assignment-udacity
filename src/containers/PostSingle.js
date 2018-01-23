import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions';
import CommentList from './CommentList';
import PostComment from '../components/PostComment';

class PostSingle extends Component {
    constructor(props){
        super(props);
        this.removePost = this.removePost.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost(id);
    }

    removePost(){
        this.props.deletePost(this.props.post.id, (payload) => {
            this.props.history.push('/')
            return payload
        });
    }
    render() {
        const { post } = this.props;
        if (!post) {
            return (
                <div> Loading...</div>
            )
        }
        return (
            <div className="col-sm-8 blog-main">
                <Link className="btn btn-outline-secondary mb-2" to="/"><i className="fa fa-angle-left"></i> Back to home</Link>
                <button className="btn btn-outline-danger float-right" onClick={this.removePost}>Delete</button>
                <div className="blog-post mt-2">
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-meta">
                        <strong>
                            <Timestamp time={ post.timestamp/1000} format='full' />
                        </strong> by <Link to="/">{ post.author }</Link>
                    </p>
                    <p className="card-text"> { post.body } </p>
                    <p> #{post.category}</p>
                </div>
                <div className="col-sm-12 border-top">
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            <div className="collapse" id="collapseExample">    
                                <PostComment postID={post.id} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h5 className="mt-3 float-left col-sm-5">{post.commentCount} Comment(s)</h5>
                            <a className="btn btn-outline-secondary btn-sm float-right mt-3 col-sm-5" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Add new comment
                            </a>
                        </div>
                        
                    </div>
                    <CommentList postID={post.id}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost, deletePost })(PostSingle);
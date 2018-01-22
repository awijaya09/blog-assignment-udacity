import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions';

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
            console.log("The post has been deleted!");
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
                <Link className="btn btn-default" to="/"><i className="fa fa-angle-left"></i> Back to home</Link>
                <div className="blog-post">
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-meta">
                        <strong>
                            <Timestamp time={ post.timestamp/1000} format='full' />
                        </strong> by <Link to="/">{ post.author }</Link>
                    </p>
                    <p className="card-text"> { post.body } </p>
                    <p> #{post.category}</p>
                </div>
                <button className="btn btn-danger" onClick={this.removePost}>Delete</button>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost, deletePost })(PostSingle);
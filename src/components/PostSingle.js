import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { getPost } from '../actions';

class PostSingle extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPost(id);
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
                <Link to="/">Back to home</Link>
                <div class="blog-post">
                    <h2 class="blog-post-title">{post.title}</h2>
                    <p className="blog-post-meta">
                        <strong>
                            <Timestamp time={ post.timestamp/1000} format='full' />
                        </strong> by <Link to="/">{ post.author }</Link>
                    </p>
                    <p className="card-text"> { post.body } </p>
                    <p> #{post.category}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost })(PostSingle);
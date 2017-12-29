import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts } from '../actions/index';

class BlogList extends Component {

    componentDidMount(){
        this.props.fetchBlogPosts();
    }

    renderBlogPost(postData) {
        if(postData) {
                return (
                    <div className="blog-post" key={ postData.id }>
                        <h3 className="blog-post-title">{ postData.title }</h3>
                        <p className="blog-post-meta">{ postData.timestamp } by <a href="/">{ postData.author }</a></p>
                        <p> { postData.body } </p>
                    </div>
                ); 
        }
        return null;
    }
    render() {
        return (
            <div className="col-sm-8 blog-main">
                { this.props.posts.map(this.renderBlogPost) }
            </div>
            
        )
    };
}

function mapStateToProps({ posts }) {
    return { posts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBlogPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
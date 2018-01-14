import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts } from '../actions/index';
import BlogItem from '../components/BlogItem';
import _ from 'lodash';

class BlogList extends Component {

    componentDidMount(){
        this.props.fetchBlogPosts();
    }

    renderBlogPost() {
        return _.map(this.props.posts, postData => {
            if(!postData.deleted) {
                return (
                    <BlogItem post={postData} />
                ); 
            } else {
                return null;    
            }
        });
        
    }
    render() {
        return (
            <div className="row">
                <div className="blog-header">
                        <div className="container">
                        <h1 className="blog-title">The React Blog for Udacity</h1>
                        <p className="lead blog-description">Built with ReactJS & Bootstrap.</p>
                        </div>
                </div>
                <div className="col-sm-8 blog-main">
                    { this.renderBlogPost() }
                </div>
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
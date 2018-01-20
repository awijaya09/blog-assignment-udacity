import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts, getPostByCat } from '../actions/index';
import BlogItem from '../components/BlogItem';
import _ from 'lodash';

class BlogList extends Component {

    componentDidMount(){
        const { category } = this.props.match.params;
        if (!category) {
            console.log("Fetching all posts");
            this.props.fetchBlogPosts();
        } else {
            console.log("Fetching posts with category: " + category);
            this.props.getPostByCat(category);
        }
        
    }

    renderBlogPost() {
        const { posts } = this.props;
        if (!posts) {
            return (
                <div>Getting data...</div>
            )
        }
        return _.map(posts, postData => {
            if(!postData.deleted) {
                return (
                    <BlogItem post={postData} key={postData.id}/>
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

function mapStateToProps({ posts }, ownProps) {
    return { posts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBlogPosts, getPostByCat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts } from '../actions/index';
import Timestamp from 'react-timestamp';
import _ from 'lodash';

class BlogList extends Component {

    componentDidMount(){
        this.props.fetchBlogPosts();
    }

    renderBlogPost() {
        return _.map(this.props.posts, postData => {
            console.log(postData)
            if(!postData.deleted) {
                return (
                    <div className="blog-post" key={ postData.id }>
                        <h3 className="blog-post-title">{ postData.title }</h3>
                        <p className="blog-post-meta">
                            <strong><Timestamp time={ postData.timestamp } format='full' /></strong> by <a href="/">{ postData.author }</a></p>
                        <p> { postData.body } </p>
                    </div>
                ); 
            } else {
                return null;    
            }
        });
        
    }
    render() {
        return (
            <div className="col-sm-8 blog-main">
                { this.renderBlogPost() }
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBlogPosts } from '../actions/index';
import BlogItem from './BlogItem';
import _ from 'lodash';

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.checkPostDeleted = this.checkPostDeleted.bind(this);
        this.getBlogPost = this.getBlogPost.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        this.state = {
            curPosts: null
        }
    }

    componentDidMount(){
        this.getBlogPost();   
    }

    getBlogPost() {
        this.props.fetchBlogPosts((payload) => {
            this.setState({ curPosts: payload.data });
            return payload;
        }); 
    }

    checkPostDeleted(postData) {
        if(!postData.deleted) {
            return (
                <BlogItem post={postData} key={postData.id} onVoteUpdate={this.getBlogPost}/>
            ); 
        } else {
        return (<div> Sorry the post is not available!</div>);    
        }
    }

    updateOrder(e, orderBy, orderMode) {
        e.preventDefault();
        const { curPosts } = this.state;
        const orderedPost = _.orderBy(curPosts, [orderBy], [orderMode]);
        console.log("order changed");
        this.setState({
            curPosts: orderedPost,
        });
    }
    renderBlogPost() {
        const { curPosts } = this.state;
        const { category } = this.props.match.params;
        if (!curPosts) {
            return (
                <div>Getting data...</div>
            )
        }
        // Default sorting from newest to oldest 
        return _.map(curPosts, postData => {
            if(!category) {
                return this.checkPostDeleted(postData);
            } else {
                if (postData.category === category) {
                    return this.checkPostDeleted(postData);
                } else {
                    return null;
                }
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
                    <div className="row">
                        <div className="col-sm-2 dropdown mb-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={(e) => this.updateOrder(e,'timestamp', 'desc')}>Newest to Oldest</a>
                                <a className="dropdown-item" onClick={(e) => this.updateOrder(e,'timestamp', 'asc')}>Oldest to Newest</a>
                            </div>
                        </div>
                        <div className="col-sm-2 dropdown mb-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rank By
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={(e) => this.updateOrder(e,'voteScore', 'desc')}>Most Voted</a>
                                <a className="dropdown-item" onClick={(e) => this.updateOrder(e,'voteScore', 'asc')}>Lowest Voted</a>
                            </div>
                        </div>
                    </div>
                   
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
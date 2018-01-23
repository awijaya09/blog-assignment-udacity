import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';

export default class CommentItem extends Component {

    render() {
        const { commentData } = this.props;
        return (
            <div className="col-sm-12 mt-3 border-bottom">
                <div className="blog-comment">
                    <p className=""><strong>{commentData.body}</strong></p>
                    <p className="blog-post-meta">
                        <strong>
                            <Timestamp time={ commentData.timestamp/1000} format='full' />
                        </strong> by <Link to="/">{ commentData.author }</Link>
                    </p>
                    
                </div>
                
            </div>        
        )
    }
}

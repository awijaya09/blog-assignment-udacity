import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';

class BlogItem extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const postData = this.props.post
        return (
            <div className="card mb-3" key={ postData.id }>
                <div className="card-body" >
                    <div className="col-sm-12">
                        <h3 className="card-title">{ postData.title }</h3>
                        <p className="blog-post-meta">
                            <strong>
                                <Timestamp time={ postData.timestamp } format='full' />
                            </strong> by <Link to="/">{ postData.author }</Link></p>
                            <p className="card-text"> { postData.body } </p>
                            <p> #{postData.category}</p>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="col-sm-12 btn-group" role="group">
                            <Link to="#" className="btn btn-outline-primary col-sm-6">Vote Up</Link>
                            <Link to="#" className="btn btn-outline-danger col-sm-6">Vote Down</Link>
                            <Link to="#" className="btn btn-outline-secondary col-sm-6">Comment</Link>
                        </div>
                    </li>
                </ul>
            </div>        
        )
    }
}

export default BlogItem;
import React, { Component } from 'react';
import '../styles/style.css';

class HeaderMenu extends Component {
    render() {
        return (
            <div>
                <div className="blog-masthead">
                    <div className="container">
                    <nav className="nav">
                        <a className="nav-link active" href="/">Home</a>
                        <a className="nav-link" href="/hello">Hello</a>
                    </nav>
                    </div>
                </div>
                <div className="blog-header">
                    <div className="container">
                    <h1 className="blog-title">The React Blog for Udacity</h1>
                    <p className="lead blog-description">Built with ReactJS & Bootstrap.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenu;
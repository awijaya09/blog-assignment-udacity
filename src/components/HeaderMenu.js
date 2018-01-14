import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../styles/style.css';

class HeaderMenu extends Component {
    render() {
        return (
            <div>
                <div className="blog-masthead">
                    <div className="container">
                        <nav className="nav">
                            <MenuItem path="/" title="Home" />
                            <MenuItem path="/post/new" title="Create New Post" />
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenu;
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
                            <MenuItem path="/" title="Home" index={0}/>
                            <MenuItem path="/posts/new" title="Create New Post" index={1} />
                            <MenuItem path="/react" title="React Blog" index={2}/>
                            <MenuItem path="/redux" title="Redux Blog" index={3}/>
                            <MenuItem path="/udacity" title="Udacity Blog" index={4}/>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderMenu;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
        this.state = {
            active : 0
        };
    }

    toggleActive(e, index) {
        e.preventDefault();
        this.setState( {
            active: index
        });
    }
    render() {
        return (
            <Link className='nav-link' to={this.props.path}>{this.props.title}</Link>
        )
    }
}

export default MenuItem;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
        this.state = {
            active : false
        };
    }

    toggleActive() {
        const currentState = this.state.active
        this.setState( {
            active: !currentState
        });
    }
    render() {
        return (
            <Link className={this.state.active ? 'nav-link active': 'nav-link'} onClick={this.toggleActive} to={this.props.path}>{this.props.title}</Link>
        )
    }
}

export default MenuItem;
import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
        this.state = {
            active : false
        };
    }

    toggleActive() {
        this.setState( {
            active: true
        });
    }
    render() {
        return (
            <a className={this.state.active ? 'nav-link active': 'nav-link'} onClick={this.toggleActive} href={this.props.path}>{this.props.title}</a>
        )
    }
}

export default MenuItem;
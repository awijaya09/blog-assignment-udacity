import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
    render() {
        return (
            <div className="row">
                <form>
                    <div className="form-group"></div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'NewPostForm',
})(PostNew);
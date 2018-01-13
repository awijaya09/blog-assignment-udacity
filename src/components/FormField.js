import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export default class FormField extends Component {

    showInput(field) {
        const classString = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : '' }`;
        return(
            <input 
                type="text"
                id={field.id}
                className={classString}
                placeholder={field.placeholder}
                value={field.value}
                {...field.input}
            />
        )
    }
    showOption(field) {
        return (
            <select 
                id={field.id}
                className="form-control"
                {...field.input}
            >
                <option>react</option>
                <option>redux</option>
                <option>udacity</option>
            </select>
        )
    }

    showTextarea(field) {
        return (
            <textarea 
                id={field.id}
                className="form-control"
                {...field.input}
            />
        )
       
    }

    render() {
        const { field } = this.props
        return (
        <div className="form-group row  has-danger">
            <label htmlFor={field.id} className="col-sm-2 col-form-label">{field.label}</label>
            <div className="col-sm-10">
                {field.id === "postTitle" ? this.showInput(field) : null}
                {field.id === "postAuthor" ? this.showInput(field): null}
                {field.id === "postCat" ? this.showOption(field) : null}
                {field.id === "postBody" ? this.showTextarea(field) : null}
                <div className="invalid-feedback">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        </div>
        )
    }
}
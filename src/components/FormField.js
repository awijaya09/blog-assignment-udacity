import React, { Component } from 'react';

export default class FormField extends Component {

    showInput(field) {
        const classString = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : '' }`;
        return(
            <input 
                type="text"
                id={field.id}
                className={classString}
                placeholder={field.placeholder}
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
                placeholder={field.placeholder}
                {...field.input}
            />
        )
       
    }

    render() {
        const { field } = this.props
        const length = () => {
            if (field.label) {
                return true;
            } 
            return false
        };
        return (
        <div className="form-group has-danger">
            { length() &&  <label htmlFor={field.id} className="col-sm-2 col-form-label">{field.label}</label> }
            {field.id === "commentBody" ? this.showTextarea(field): null}
            {field.id === "commentAuthor" ? this.showInput(field): null}
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
import React, {Component} from "react";
import {Formik} from "formik";

export default class Searchbar extends Component {

    submit = (values, actions) => {
        console.log(values);
    }

    render() {
        return (
            <Formik initialValues={{query: ''}} onSubmit={this.submit}>
                {({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
                    <form onSubmit={handleSubmit} className="d-flex flex-row p-2">
                        <input className="form-control mr-2 flex-fill" placeholder="Search a movie..." name="query" onChange={handleChange} onBlur={handleBlur} />
                        <button className="btn btn-success btn-small" type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        );
    }
}
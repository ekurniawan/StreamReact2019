import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {createStream} from '../../actions';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    //console.log(this.props);
    return (
      <div className="ui grid">
        <div className="eight wide column">
          <form
            className="ui form error"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field name="title" component={this.renderInput} label="Title" />
            <Field
              name="description"
              component={this.renderInput}
              label="Description"
            />
            <button className="ui button primary">Submit</button>
          </form>
        </div>
        <div className="eight wide column"></div>
      </div>
    );
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate: validate
  })(StreamCreate);
  
  export default connect(null,{createStream:createStream})(formWrapped);

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          name={name}
          label={label}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link className="btn left red lighten-2" to="/surveys">
            Cancel
          </Link>
          <button className="btn right light-blue accent-4" type="submit">
            next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(formFields, ({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${errorMsg || name}!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);

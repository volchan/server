import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title"
  },
  {
    label: "Survey Subject",
    name: "subject"
  },
  {
    label: "Survey Body",
    name: "body"
  },
  {
    label: "Recipients List",
    name: "emails",
    errorMsg: "list of emails"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  _.each(FIELDS, ({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${errorMsg || name}!`
    }
  })

  return errors;
};

export default reduxForm({ validate, form: "surveyForm" })(SurveyForm);

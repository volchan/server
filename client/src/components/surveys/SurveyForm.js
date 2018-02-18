import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";

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
    name: "emails"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" name={name} label={label} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className="btn light-blue accent-4" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);

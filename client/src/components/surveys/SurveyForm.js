import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          type="text"
          name="title"
          label="Survey Title"
          component={SurveyField}
        />
        <Field
          type="text"
          name="subject"
          label="Survey Subject"
          component={SurveyField}
        />
        <Field
          type="text"
          name="body"
          label="Survey Body"
          component={SurveyField}
        />
        <Field
          type="text"
          name="recipients"
          label="Recipients List"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);

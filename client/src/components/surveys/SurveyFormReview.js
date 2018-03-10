import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="btn left red lighten-2" onClick={onCancel}>
        Back
      </button>
      <button
        className="btn right light-blue accent-4"
        onClick={() => {
          submitSurvey(formValues);
        }}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(mapStateToProps, actions)(SurveyFormReview);

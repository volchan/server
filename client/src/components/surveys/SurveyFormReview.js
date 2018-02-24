import React from "react";
import { connect } from "react-redux";

import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="btn left red lighten-2" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(mapStateToProps)(SurveyFormReview);

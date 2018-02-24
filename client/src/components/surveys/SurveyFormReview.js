import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel }) => {
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
    formValues: state.form.surveyForm.formValues
  };
};

export default connect(mapStateToProps)(SurveyFormReview);

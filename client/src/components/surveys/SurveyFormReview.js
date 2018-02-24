import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button
        className="btn left red lighten-2"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;

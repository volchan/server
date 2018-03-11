import React, { Component } from "react";
import { connect } from "react-redux";

import { fecthSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fecthSurveys();
  }

  render() {
    return <div>SurveyList</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(mapStateToProps, { fecthSurveys })(SurveyList);

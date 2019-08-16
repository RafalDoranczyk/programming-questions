import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import { BUTTON_MODELS } from "constants.js";
import SuggestQuestionForm from "../components/SuggestQuestionForm/SuggestQuestionForm";

class SuggestQuestionPage extends Component {
  render() {
    const { postUserQuestion } = this.props;
    return (
      <SuggestQuestionForm
        onSubmit={postUserQuestion}
        BUTTON_MODELS={BUTTON_MODELS}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postUserQuestion: payload => dispatch(actions.postUserQuestion(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(SuggestQuestionPage);

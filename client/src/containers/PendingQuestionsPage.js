import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import InfoAboutSection from "../components/PendingQuestionsPage/InfoAboutSection/InfoAboutSection";
import PendingQuestionsBox from "../components/PendingQuestionsPage/PendingQuestionsBox/PendingQuestionsBox";
import FilterBox from "../components/PendingQuestionsPage/FilterBox/FilterBox";
import { BUTTON_MODELS } from "constants.js";

class PendingQuestionsPage extends Component {
  componentDidMount() {
    this.props.fetchPendingQuestions();
  }
  render() {
    const {
      allPendingQuestions,
      pendingTechnologies,
      chosenTechnologyForFilter,
      isSpinnerShowed,
      //fn
      filterPendingQuestions,
      postRateQuestion
    } = this.props;

    return (
      <>
        <InfoAboutSection />
        <FilterBox
          chosenTechnologyForFilter={chosenTechnologyForFilter}
          pendingTechnologies={pendingTechnologies}
          filterPendingQuestions={filterPendingQuestions}
          BUTTON_MODELS={BUTTON_MODELS}
          allPendingQuestions={allPendingQuestions}
        />
        <PendingQuestionsBox
          isSpinnerShowed={isSpinnerShowed}
          postRateQuestion={postRateQuestion}
          allPendingQuestions={allPendingQuestions}
        />
      </>
    );
  }
}
const mapStateToProps = ({
  allPendingQuestions,
  chosenPendingQuestions,
  pendingTechnologies,
  chosenTechnologyForFilter,
  isSpinnerShowed
}) => ({
  allPendingQuestions,
  chosenPendingQuestions,
  pendingTechnologies,
  chosenTechnologyForFilter,
  isSpinnerShowed
});
const mapDispatchToProps = dispatch => ({
  fetchPendingQuestions: () => dispatch(actions.fetchPendingQuestions()),
  filterPendingQuestions: technology =>
    dispatch(actions.filterPendingQuestions(technology)),
  postRateQuestion: id => dispatch(actions.postRateQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingQuestionsPage);

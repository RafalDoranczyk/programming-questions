import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import { withRouter } from "react-router-dom";
import * as routes from "routes/routes";
import Carousel from "../components/Carousel/Carousel";

class QuestionsPage extends Component {
  componentDidMount() {
    const {
      history: {
        location: { pathname }
      }
    } = this.props;
    const chosenQuestionsTechnology = pathname.slice(
      routes.questions.length + 1
    );
    this.props.giveChosenApprovedQuestions(chosenQuestionsTechnology);
  }

  render() {
    const {
      chosenApprovedQuestions,
      chosenQuestionsTechnology,
      isAnswerShowed,
      //fn
      answerHandler
    } = this.props;

    return (
      <Carousel
        color={chosenQuestionsTechnology}
        isAnswerShowed={isAnswerShowed}
        answerHandler={answerHandler}
        allSlides={chosenApprovedQuestions}
      />
    );
  }
}

const mapStateToProps = ({
  chosenApprovedQuestions,
  chosenQuestionsTechnology,
  currentApprovedQuestionIndex,
  isAnswerShowed,
  answerHandler
}) => ({
  chosenApprovedQuestions,
  chosenQuestionsTechnology,
  currentApprovedQuestionIndex,
  isAnswerShowed,
  answerHandler
});

const mapDispatchToProps = dispatch => ({
  answerHandler: () => dispatch(actions.answerHandler()),
  giveChosenApprovedQuestions: chosenQuestionsTechnology =>
    dispatch(actions.giveChosenApprovedQuestions(chosenQuestionsTechnology))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuestionsPage));

import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import { withRouter } from "react-router-dom";
import BottomButtons from "components/QuestionsPage/BottomButtons/BottomButtons";
import NavButtons from "components/QuestionsPage/NavButtons/NavButtons";
import * as routes from "routes/routes";
import QuestionsCarousel from "../components/QuestionsPage/QuestionBox/QuestionsCarousel/QuestionsCarousel";
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
      allApprovedQuestions,
      chosenApprovedQuestions,
      chosenQuestionsTechnology,
      currentApprovedQuestionIndex,
      isAnswerShowed,
      answerHandler,
      //fn
      giveAnotherQuestion
    } = this.props;
    const chosenApprovedQuestionsLength = chosenApprovedQuestions.length;

    return (
      <>
        <NavButtons
          chosenApprovedQuestions={chosenApprovedQuestions}
          currentApprovedQuestionIndex={currentApprovedQuestionIndex}
          chosenQuestionsTechnology={chosenQuestionsTechnology}
          giveAnotherQuestion={giveAnotherQuestion}
        />
        <QuestionsCarousel
          currentApprovedQuestionIndex={currentApprovedQuestionIndex}
          chosenApprovedQuestions={chosenApprovedQuestions}
          isAnswerShowed={isAnswerShowed}
          answerHandler={answerHandler}
          chosenQuestionsTechnology={chosenQuestionsTechnology}
          allApprovedQuestions={allApprovedQuestions}
        />
        <BottomButtons
          giveAnotherQuestion={giveAnotherQuestion}
          currentApprovedQuestionIndex={currentApprovedQuestionIndex}
          chosenApprovedQuestionsLength={chosenApprovedQuestionsLength}
        />
      </>
    );
  }
}

const mapStateToProps = ({
  allApprovedQuestions,
  chosenApprovedQuestions,
  chosenQuestionsTechnology,
  currentApprovedQuestionIndex,
  isAnswerShowed,
  answerHandler
}) => ({
  allApprovedQuestions,
  chosenApprovedQuestions,
  chosenQuestionsTechnology,
  currentApprovedQuestionIndex,
  isAnswerShowed,
  answerHandler
});

const mapDispatchToProps = dispatch => ({
  answerHandler: () => dispatch(actions.answerHandler()),
  giveAnotherQuestion: questionIndex =>
    dispatch(actions.giveAnotherQuestion(questionIndex)),
  giveChosenApprovedQuestions: chosenQuestionsTechnology =>
    dispatch(actions.giveChosenApprovedQuestions(chosenQuestionsTechnology))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuestionsPage));

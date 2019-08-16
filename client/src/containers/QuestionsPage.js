import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import { withRouter } from "react-router-dom";
import BottomButtons from "components/QuestionsPage/BottomButtons/BottomButtons";
import NavButtons from "components/QuestionsPage/NavButtons/NavButtons";
import * as routes from "routes/routes";
import QuestionBox from "components/QuestionsPage/QuestionBox/QuestionBox";

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
        <QuestionBox
          currentApprovedQuestionIndex={currentApprovedQuestionIndex}
          chosenApprovedQuestions={chosenApprovedQuestions}
          isAnswerShowed={isAnswerShowed}
          chosenQuestionsTechnology={chosenQuestionsTechnology}
          answerHandler={answerHandler}
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
  giveAnotherQuestion: questionIndex =>
    dispatch(actions.giveAnotherQuestion(questionIndex)),
  giveChosenApprovedQuestions: chosenQuestionsTechnology =>
    dispatch(actions.giveChosenApprovedQuestions(chosenQuestionsTechnology))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuestionsPage));

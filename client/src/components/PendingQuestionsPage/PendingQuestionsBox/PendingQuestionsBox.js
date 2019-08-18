import React from "react";
import SingleQuestionContainer from "./SingleQuestionContainer/SingleQuestionContainer";
import * as S from "./styles";
const PendingQuestionsBox = ({ likeWaitingQuestions, allPendingQuestions }) => {
  const pendingQuestionsToRender = allPendingQuestions.map(
    question =>
      question.isShowed && (
        <SingleQuestionContainer
          key={question._id}
          isShowed={question.isShowed}
          author={question.author}
          date={question.date}
          id={question._id}
          question={question.question}
          icon={question.icon}
          color={question.color}
          likes={question.likes}
          onClick={() => likeWaitingQuestions(question._id)}
        />
      )
  );

  return (
    <S.PendingQuestionsBox>{pendingQuestionsToRender} </S.PendingQuestionsBox>
  );
};

export default PendingQuestionsBox;

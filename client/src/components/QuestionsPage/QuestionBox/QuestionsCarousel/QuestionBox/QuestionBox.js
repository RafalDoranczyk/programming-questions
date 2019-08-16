import React from "react";
import QuestionHeading from "./QuestionHeading/QuestionHeading";
import * as S from "./style";

const QuestionBox = ({
  chosenApprovedQuestions,
  isAnswerShowed,
  color,
  answerHandler,
  question,
  answer,
  author,
  level,
  currentApprovedQuestionIndex
}) => {
  return (
    <S.QuestionBox>
      <QuestionHeading
        currentApprovedQuestionIndex={currentApprovedQuestionIndex}
        chosenApprovedQuestions={chosenApprovedQuestions}
        color={color}
        level={level}
      />
      <S.Question>{question}</S.Question>
      <S.Author>{author} admin</S.Author>
      <S.Button color={color} onClick={answerHandler}>
        {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
      </S.Button>
      <S.Answer isTextShowed={isAnswerShowed}>{answer}</S.Answer>
    </S.QuestionBox>
  );
};

export default QuestionBox;

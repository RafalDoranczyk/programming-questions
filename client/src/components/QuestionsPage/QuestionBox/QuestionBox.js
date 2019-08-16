import React from "react";
import QuestionHeading from "./QuestionHeading/QuestionHeading";
import * as S from "./style";

const QuestionBox = ({
  currentApprovedQuestionIndex,
  chosenApprovedQuestions,
  isAnswerShowed,
  chosenQuestionsTechnology,
  answerHandler
}) => {
  const { question, answer, level, createdBy } =
    chosenApprovedQuestions[currentApprovedQuestionIndex] || "";

  return (
    <S.QuestionBox>
      <QuestionHeading
        currentApprovedQuestionIndex={currentApprovedQuestionIndex}
        chosenApprovedQuestions={chosenApprovedQuestions}
        chosenQuestionsTechnology={chosenQuestionsTechnology}
        level={level}
      />
      <S.Question>{question}</S.Question>
      <S.Author>{createdBy}</S.Author>
      <S.Button color={chosenQuestionsTechnology} onClick={answerHandler}>
        {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
      </S.Button>
      <S.Answer isTextShowed={isAnswerShowed}>{answer}</S.Answer>
    </S.QuestionBox>
  );
};

export default QuestionBox;

import React from "react";
import * as S from "./styles";

const QuestionHeading = ({
  currentApprovedQuestionIndex,
  chosenApprovedQuestions,
  chosenQuestionsTechnology,
  level
}) => {
  const currentNumber =
    currentApprovedQuestionIndex > chosenApprovedQuestions.length
      ? chosenApprovedQuestions.length
      : currentApprovedQuestionIndex + 1;
  const currentBoxLength = chosenApprovedQuestions.length;

  return (
    <S.QuestionHeading>
      <S.Text>Pytanie</S.Text>
      <S.Box color={chosenQuestionsTechnology}>
        {currentNumber}/{currentBoxLength}
      </S.Box>
      <S.Text type="levelText">Poziom</S.Text>
      <S.Box level={level} color={chosenQuestionsTechnology} type="levelBox">
        {level}
      </S.Box>
    </S.QuestionHeading>
  );
};

export default QuestionHeading;

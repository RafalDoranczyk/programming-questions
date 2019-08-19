import React from "react";
import QuestionHeading from "./QuestionHeading/QuestionHeading";
import * as S from "./style";
const SlideArea = ({
  allSlides,
  index,
  level,
  color,
  answerHandler,
  isAnswerShowed,
  author,
  question,
  answer,
  isActive
}) => {
  return (
    <S.GridWrapper isActive={isActive}>
      <QuestionHeading
        index={index}
        allSlides={allSlides}
        color={color}
        level={level}
        isActive={isActive}
      />
      <S.Question>{question}</S.Question>
      <S.Author>{author}</S.Author>
      <S.Button
        isAnswerShowed={isAnswerShowed}
        color={color}
        onClick={() => answerHandler()}
      >
        {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
      </S.Button>
      <S.Answer isTextShowed={isAnswerShowed}>{answer}</S.Answer>
    </S.GridWrapper>
  );
};

export default SlideArea;

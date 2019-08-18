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
  answer
}) => {
  return (
    <S.GridWrapper>
      <QuestionHeading
        index={index}
        allSlides={allSlides}
        color={color}
        level={level}
      />
      <S.Question>{question}</S.Question>
      <S.Author>{author}</S.Author>
      <S.Button color={color} onClick={() => answerHandler()}>
        {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
      </S.Button>
      <S.Answer isTextShowed={isAnswerShowed}>{answer}</S.Answer>
    </S.GridWrapper>
  );
};

export default SlideArea;

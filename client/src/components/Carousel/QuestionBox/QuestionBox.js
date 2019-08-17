import React, { useRef, useEffect } from "react";
import QuestionHeading from "./QuestionHeading/QuestionHeading";
import * as S from "./style";
import { Slide } from "pure-react-carousel";
const QuestionBox = ({ allSlides, isAnswerShowed, color, answerHandler }) => {

  const sliders = allSlides.map((q, index) => (
    <Slide index={index} key={index}>
      <S.QuestionBox>
        <QuestionHeading
          index={index}
          allSlides={allSlides}
          color={color}
          level={q.level}
        />
        <S.Question>{q.question}</S.Question>
        <S.Author>{q.author}</S.Author>
        <S.Button color={color} onClick={() => answerHandler()}>
          {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
        </S.Button>
        <S.Answer isTextShowed={isAnswerShowed}>{q.answer}</S.Answer>
      </S.QuestionBox>
    </Slide>
  ));

  return <> {sliders}</>;
};

export default QuestionBox;

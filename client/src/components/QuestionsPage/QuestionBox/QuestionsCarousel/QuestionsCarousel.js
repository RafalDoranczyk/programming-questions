import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import * as S from "./style";
import "pure-react-carousel/dist/react-carousel.es.css";
import QuestionBox from "./QuestionBox/QuestionBox";

const QuestionsCarousel = ({
  allApprovedQuestions,
  chosenQuestionsTechnology,
  isAnswerShowed,
  answerHandler,
  currentApprovedQuestionIndex,
  chosenApprovedQuestions
}) => {
  console.log(allApprovedQuestions);
  const sliders = allApprovedQuestions.map((q, index) => (
    <Slide index={index} key={index}>
      <QuestionBox
        currentApprovedQuestionIndex={currentApprovedQuestionIndex}
        color={chosenQuestionsTechnology}
        author={q.createdBy}
        question={q.question}
        answer={q.answer}
        level={q.level}
        answerHandler={answerHandler}
        isAnswerShowed={isAnswerShowed}
        currentApprovedQuestionIndex={currentApprovedQuestionIndex}
        chosenApprovedQuestions={chosenApprovedQuestions}
      />
    </Slide>
  ));

  return (
    <CarouselProvider
      currentSlide={currentApprovedQuestionIndex}
      naturalSlideWidth={100}
      totalSlides={allApprovedQuestions.length}
    >
      <S.CarouselWrapper>
        <Slider style={{ height: "100%" }}>{sliders}</Slider>
      </S.CarouselWrapper>
    </CarouselProvider>
  );
};

export default QuestionsCarousel;

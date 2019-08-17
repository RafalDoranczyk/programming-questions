import React, { Component, useRef } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";
import QuestionHeading from "./QuestionHeading/QuestionHeading";
import NavButtons from "./NavButtons/NavButtons";
import * as actions from "store/actions";

class Carousel extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };

  onButtonClick = slideIndex => {
    this.setState({ slideIndex });
  };

  render() {
    const {
      chosenQuestionsTechnology,
      isAnswerShowed,
      answerHandler,
      chosenApprovedQuestions
    } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchMove: true,
      slickPrev: false,
      arrows: false,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    const sliders = chosenApprovedQuestions.map((q, index) => (
      <S.Wrapper key={index}>
        <S.QuestionBox>
          <QuestionHeading
            index={index}
            allSlides={chosenApprovedQuestions}
            color={chosenQuestionsTechnology}
            level={q.level}
          />
          <S.Question>{q.question}</S.Question>
          <S.Author>{q.author}</S.Author>
          <S.Button
            color={chosenQuestionsTechnology}
            onClick={() => answerHandler()}
          >
            {isAnswerShowed ? "Ukryj Odpowiedź" : "Pokaż odpowiedź"}
          </S.Button>
          <S.Answer isTextShowed={isAnswerShowed}>{q.answer}</S.Answer>
        </S.QuestionBox>
      </S.Wrapper>
    ));
    const { slideIndex } = this.state;

    return (
      <S.WholeWrapper>
        <NavButtons
          slider={this.slider}
          onClick={this.slider && this.slider.slickGoTo}
          slideIndex={slideIndex}
          allSlides={chosenApprovedQuestions}
          color={chosenQuestionsTechnology}
        />
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {sliders}
        </Slider>
      </S.WholeWrapper>
    );
  }
}

const mapStateToProps = ({
  chosenQuestionsTechnology,
  isAnswerShowed,
  chosenApprovedQuestions
}) => ({
  chosenQuestionsTechnology,
  isAnswerShowed,
  chosenApprovedQuestions
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

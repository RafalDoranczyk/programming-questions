import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";
import NavButtons from "./NavButtons/NavButtons";
import SlideArea from "./SlideArea/SlideArea";

class Carousel extends Component {
  componentDidMount() {
    const slideIndexFromStorage = Number(localStorage.getItem("slideIndex"));
    this.changeSlideIndex(slideIndexFromStorage);
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("slideIndex", this.state.slideIndex);
  }

  state = {
    slideIndex: 0,
    settings: {
      dots: false,
      initialSlide: Number(localStorage.getItem("slideIndex")),
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchMove: true,
      slickPrev: false,
      arrows: false,
      beforeChange: (current, next) => this.changeSlideIndex(next)
    }
  };

  changeSlideIndex = slideIndex => this.setState({ slideIndex });
  render() {
    const { color, isAnswerShowed, answerHandler, allSlides } = this.props;
    const { slideIndex, settings } = this.state;
    const sliders = allSlides.map((q, index) => (
      <S.SingleSlideWrapper key={index}>
        <SlideArea
          isActive={slideIndex === index}
          allSlides={allSlides}
          index={index}
          level={q.level}
          color={color}
          answerHandler={answerHandler}
          isAnswerShowed={isAnswerShowed}
          author={q.author}
          question={q.question}
          answer={q.answer}
        />
      </S.SingleSlideWrapper>
    ));

    return (
      <S.CarouselWrapper>
        <NavButtons
          onClick={this.slider && this.slider.slickGoTo}
          slideIndex={slideIndex}
          allSlides={allSlides}
          color={color}
        />
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {sliders}
        </Slider>
      </S.CarouselWrapper>
    );
  }
}

export default Carousel;

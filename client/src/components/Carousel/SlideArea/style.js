import styled, { css, keyframes } from "styled-components";
const pageMove = keyframes`
from {
  opacity: 0; 
  transform: translateY(40px)};
 to{
   opacity: 1;
    transform: translateY(0) };
 `;

export const GridWrapper = styled.div(
  ({ isActive }) => css`
    animation: ${pageMove} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 15% auto auto 35px 1fr;
    grid-template-areas:
      "heading heading heading heading "
      " question question question question "
      ".  . author author"
      ". button button ."
      " answer answer answer answer ";
    gap: 20px;
    margin: 0 10px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: #fff;
    line-height: 140%;
    letter-spacing: 1px;
    transition: 0.4s;
    transform: ${isActive ? "scale(1)" : "scale(0.9)"};
    overflow: hidden;
  `
);

export const Question = styled.p`
  grid-area: question;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #15113f;
  font-size: 15px;
`;

export const Answer = styled.p(
  ({ isTextShowed }) => css`
    grid-area: answer;
    opacity: ${isTextShowed ? "1" : "0"};
    overflow: auto;
    transition: 0.3s ease;
    text-align: justify;
    font-size: 13px;
  `
);

export const Author = styled.span`
  grid-area: author;
  display: block;
  font-size: 10px;
  font-style: italic;
`;

export const Button = styled.button(
  ({ theme, color, isAnswerShowed }) => css`
    width: 150px;
    justify-self: center;
    grid-area: button;
    border-radius: 5px;
    border: 1px solid ${theme[color]};
    transition: 0.3s ease;
    position: relative;
    overflow: hidden;
    letter-spacing: 1px;
    &::after {
      transition: 0.3s;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme[color]};
      transform: ${isAnswerShowed ? "translateY(0)" : "translateY(-100%)"};
      opacity: ${isAnswerShowed ? "0.2" : "0"};
    }
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  `
);

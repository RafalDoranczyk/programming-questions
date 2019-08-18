import styled, { css, keyframes } from "styled-components";
const pageMove = keyframes`
from {
  opacity: 0; 
  transform: translateY(40px)};
 to{
   opacity: 1;
    transform: translateY(0) };
 `;

export const GridWrapper = styled.div`
  animation: ${pageMove} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 15% 20% auto 30px 1fr;
  grid-template-areas:
    "heading heading heading heading  "
    " question question question question  "
    ".  . author author"
    ". button button ."
    " answer answer answer answer  ";
  gap: 20px;
  margin: 0 10px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #fff;
`;

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
    line-height: 140%;
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
  ({ theme, color }) => css`
    grid-area: button;
    border-radius: 5px;
    background-color: ${theme[color]};
    transition: 0.3s ease;
    &:focus,
    &:hover {
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.5);
    }
  `
);

import styled, { css, keyframes } from "styled-components";

const juniorMove = keyframes`
from{
  opacity: 0;
  transform: translateY(-100%)
}
to{
opacity: 1;
transform: translateY(0)
`;

const seniorMove = keyframes``;

const midMove = keyframes`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    opacity: 1;
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    opacity: 1;
    transform: perspective(400px);
  }
}`;

export const QuestionHeading = styled.div(
  ({}) => css`
    grid-area: heading;
    display: grid;
    grid-template-columns: 20% 1fr 20% 1fr;
    gap: 5px;
    /* background-color: red; */
    grid-template-areas: "questionText questionBox levelText levelBox";
    grid-template-rows: 1fr;
    align-items: center;
  `
);

export const Text = styled.p(
  ({ type }) => css`
    font-size: 12px;
    justify-self: center;
    display: flex;
    align-items: center;
    grid-area: ${type === "levelText" ? "levelText" : "questionText"};
  `
);

const levelBoxStyle = (level, isActive) => css`
  opacity: 0;
  grid-area: levelBox;
  border: none;
  ${(level === "junior") & isActive &&
    level &&
    css`
      animation: ${juniorMove} 0.8s ease both;
    `};
  ${(level === "mid") & isActive &&
    level &&
    css`
      animation: ${midMove} 0.8s linear both;
    `};
  ${(level === "senior") & isActive &&
    level &&
    css`
      animation: ${seniorMove} 0.5s ease both infinite;
    `};
`;

const questionBoxStyle = (theme, level) => css`
  grid-area: questionBox;
`;
export const Box = styled.div(
  ({ color, type, theme, level, isActive }) => css`
    border-bottom: 1px solid ${theme[color]};
    border-right: 1px solid ${theme[color]};
    border-left: 1px solid ${theme[color]};
    background-color: ${theme[level]};
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;
    border-top: none;
    position: relative;
    ${type === "levelBox" && levelBoxStyle(level, isActive)};
    /* little triangle bottom and right  */
    &::after {
      top: calc(100% - 12px);
      left: 50%;
      transform: translateX(-50%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      height: 15px;
      width: 25px;
      background-color: #fff;
      ${type === "levelBox" &&
        type &&
        css`
          top: 10%;
          left: calc(100% - 19px);
          transform: rotate(-90deg);
        `}
    }
  `
);

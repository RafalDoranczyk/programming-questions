import styled, { css } from "styled-components";

export const QuestionNumber = styled.div(
  ({ color }) => css`
    box-shadow: 0 1px 3px ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 30px;
    font-size: 12px;
    letter-spacing: 1px;
    &::after {
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${color};
      opacity: 0.6;
      z-index: -1;
    }
  `
);

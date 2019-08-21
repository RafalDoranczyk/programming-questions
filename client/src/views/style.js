import styled, { css, keyframes } from "styled-components";
import React from "react";

export const pageMove = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1
}
`;

const Wrapper = styled.div(
  ({ theme, color, isSpinnerShowed }) => css`
    margin: 45px auto 0 auto; /* header is 45px height */
    padding-top: 15px;
    max-width: 800px;
    &::after {
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.3;
      ${chosenQuestionsTechnology =>
        chosenQuestionsTechnology &&
        css`
          background-color: ${theme[color] || "#fff"};
        `}
    }
    /* FOR SPINNER */
    &::before {
      top: 0;
      left: 0;
      position: fixed;
      height: 100vh;
      width: 100vw;
      z-index: 4;
      transform: ${isSpinnerShowed ? "translateX(0)" : "translateX(-100%)"};
      opacity: ${isSpinnerShowed ? "1" : "0"};
    }
  `
);

const PageWrapper = ({ color, children, isSpinnerShowed }) => {
  return (
    <Wrapper isSpinnerShowed={isSpinnerShowed} color={color}>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;

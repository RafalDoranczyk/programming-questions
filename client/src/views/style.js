import styled, { keyframes, css } from "styled-components";
import React from "react";
export const pageMove = keyframes`
from {
  opacity: 0; 
  transform: translateY(40px)};
 to{
   opacity: 1;
    transform: translateY(0) };
 `;

//  animation: ${pageMove} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

const Wrapper = styled.div(
  ({ theme, color }) => css`
    /* background-color: #fafafa; */
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
  `
);

const PageWrapper = ({ color, children }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default PageWrapper;

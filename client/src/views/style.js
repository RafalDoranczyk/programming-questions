import styled, { css } from "styled-components";
import React from "react";

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

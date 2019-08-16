import styled, { css } from "styled-components";
export const Button = styled.div(
  ({ theme, color }) => css`
    margin-top: 5px;
    font-size: 60px;
    color: ${color};
    background-color: transparent;
  `
);

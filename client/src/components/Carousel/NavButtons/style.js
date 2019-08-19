import styled, { css } from "styled-components";
export const NavButtons = styled.div(
  ({ theme, color }) => css`
    width: 90%;
    height: 45px;
    margin: 0 auto 10px auto;
    display: flex;
    transition: 0.3s;
    overflow-x: auto;
    padding: 5px;
    scroll-behavior: smooth;
    &::-webkit-scrollbar-thumb {
      background-color: ${theme[color]};
    }
  `
);

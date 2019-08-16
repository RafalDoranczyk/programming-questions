import styled, { css } from "styled-components";

export const NavButtons = styled.div(
  ({ theme, color }) => css`
    flex-basis: 10%;
    width: 90%;
    transition: 0.3s;
    display: flex;
    align-items: center;
    overflow-x: auto;
    margin: 0 auto;
    border-radius: 10px;

    /* background-color: #fff; */
    scroll-behavior: smooth;
    &::-webkit-scrollbar-thumb {
      background-color: ${theme[color]};
    }
  `
);

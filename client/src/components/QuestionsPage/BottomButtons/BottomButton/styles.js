import styled, { css } from "styled-components";

export const Button = styled.button(
  ({ theme, type, disabled }) => css`
    display: flex;
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-size: 20px;
    color: black;
    opacity: ${disabled ? "0.2" : "1"};
    &:focus,
    &:hover {
      box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.5);
    }
    ${type === "next" &&
      type &&
      css`
        left: calc(90% - 40px);
      `};
  `
);

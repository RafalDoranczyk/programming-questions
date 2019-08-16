import styled, { css } from "styled-components";

export const QuestionHeading = styled.div`
  grid-area: heading;
  display: grid;
  grid-template-columns: 20% 1fr 20% 1fr;
  gap: 5px;
  /* background-color: red; */
  grid-template-areas: "questionText questionBox levelText levelBox";
  grid-template-rows: 1fr;
  align-items: center;
`;

export const Text = styled.p(
  ({ type }) => css`
    font-size: 12px;
    justify-self: flex-end;
    grid-area: ${type === "levelText" ? "levelText" : "questionText"};
  `
);
export const Box = styled.div(
  ({ color, type, theme, level }) => css`
    align-self: stretch;
    letter-spacing: ${type !== "levelBox" && "4px"};
    grid-area: ${type === "levelBox" ? "levelBox" : "questionBox"};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme[color]};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    ${type === "levelBox" &&
      type &&
      css`
        background-color: ${level === "junior"
          ? theme.junior
          : level === "mid"
          ? theme.mid
          : level === "senior" && theme.senior};
      `}
    &::after {
      content: "";
      position: absolute;
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

import styled, { css, keyframes } from "styled-components";

const buttonMove = keyframes`
0%{
  transform: translateY(0);
}
25%{
  transform: translateY(5px);
}
75%{
  transform: translateY(-5px);
}
100%{
  transform: translateY(0);
}
`;

export const SingleQuestionContainer = styled.div(
  ({ color }) => css`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 20% 40px;
    grid-template-rows: 1fr 1fr auto 10px 30px;
    gap: 5px;
    grid-template-areas:
      "question  question icon"
      "question  question icon"
      " author  . ."
      ".   . likeBox"
      "button  . likeBox";
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    position: relative;
    transition: 0.3s;

    &:hover,
    &:focus-within {
      transform: scale(1.05);
      box-shadow: 0 1px 12px rgba(0, 0, 0, 0.12), 0 1px 12px rgba(0, 0, 0, 0.24);
    }
  `
);

export const Question = styled.p`
  grid-area: question;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
`;
export const Author = styled.p`
  display: block;
  margin-left: 15px;
  grid-area: author;
  font-size: 10px;
  font-style: italic;
`;

export const Button = styled.button(
  ({ isLiked }) => css`
    grid-area: button;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 0 2px 1px #ddd;
    border-radius: 5px;
    font-size: 12px;
    width: 80%;
    padding: 0 10px;
    & > i {
      display: ${isLiked && "none"};
    }
    &:focus,
    &:hover {
      animation: ${buttonMove} 0.3s ease;
    }
  `
);

export const Icon = styled.div(
  ({ color }) => css`
    align-self: flex-start;
    grid-area: icon;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color};
    font-size: 30px;
  `
);

export const LikeBox = styled.div(
  ({ likes }) => css`
    grid-area: likeBox;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222;
    border-radius: 5px;
    background-color: ${likes > 0
      ? "#7bc087"
      : likes < 0
      ? "#fe4a7a "
      : "#e6e6ea "};
  `
);

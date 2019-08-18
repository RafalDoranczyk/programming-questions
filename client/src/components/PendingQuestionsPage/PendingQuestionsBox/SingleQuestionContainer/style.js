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
  ({ isShowed }) => css`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 20% 15%;
    grid-template-rows: 1fr 1fr auto 10% 25%;
    gap: 5px;
    grid-template-areas:
      "question  question icon"
      "question  question icon"
      " author  . ."
      ".   likeBox likeBox"
      "button  likeBox likeBox";
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.3s ease;
    cursor: pointer;
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

export const Button = styled.button`
  grid-area: button;
  box-shadow: 0 0 2px 1px #ddd;
  border-radius: 5px;
  font-size: 10px;
  width: 80%;
  &:focus,
  &:hover {
    animation: ${buttonMove} 0.3s ease;
  }
`;

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

export const LikeBox = styled.div`
  grid-area: likeBox;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "allLikes likeButton"
    "allLikes dislikeButton";
  gap: 5px;
  font-size: 14px;
`;

export const AllLikes = styled.div`
  grid-area: allLikes;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #66f;
  color: white;
`;

export const LikeButton = styled.button(
  ({ type }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: ${type === "like" && "likeButton"};
    font-size: 15px;
    position: relative;
    z-index: 0;
    color: ${type === "like" ? "green" : "red"};
    &:focus,
    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
    }

    /* ::before {
      position: relative;
    } */
  `
);

import React from "react";
import * as S from "./style";
import { Icon } from "@iconify/react";
const SingleQuestionContainer = ({
  color,
  question,
  date,
  id,
  author,
  icon,
  likes,
  onClick,
  isLiked
}) => {
  return (
    <S.SingleQuestionContainer color={color}>
      <S.Question>{question}</S.Question>
      <S.Icon color={color}>
        <Icon icon={icon} />
      </S.Icon>
      <S.Author>
        Autor: <span>{author}</span>
      </S.Author>

      <S.Button
        isLiked={isLiked}
        disabled={isLiked}
        onClick={() => onClick({ id, value: 1 })}
      >
        {isLiked ? "Już polubiłeś to pytanie" : "Super pytanie!"}
        <i className="far fa-thumbs-up" />
      </S.Button>

      <S.LikeBox likes={likes}>{likes}</S.LikeBox>
    </S.SingleQuestionContainer>
  );
};

export default SingleQuestionContainer;

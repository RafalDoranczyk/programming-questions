import React from "react";
import * as S from "./style";
import { Icon } from "@iconify/react";
const SingleQuestionContainer = ({
  color,
  question,
  date,
  id,
  createdBy,
  icon,
  isShowed,
  likes,
  onClick
}) => {
  return (
    <S.SingleQuestionContainer isShowed={isShowed}>
      <S.Question>{question}</S.Question>
      <S.Icon color={color}>
        <Icon icon={icon} />
      </S.Icon>
      <S.Author>
        Autor: <span>{createdBy}</span>
      </S.Author>

      <S.Button>Pokaż odpowiedzi (3)</S.Button>

      <S.LikeBox>
        <S.AllLikes>{likes}</S.AllLikes>
        <S.LikeButton
          type="like"
          onClick={onClick}
          className="far fa-thumbs-up"
        />
        <S.LikeButton
          type="dislike"
          onClick={onClick}
          className="far fa-thumbs-down"
        />
      </S.LikeBox>
    </S.SingleQuestionContainer>
  );
};

export default SingleQuestionContainer;

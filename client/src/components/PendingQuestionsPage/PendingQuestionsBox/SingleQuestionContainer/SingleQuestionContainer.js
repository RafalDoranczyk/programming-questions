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
  isSpinnerShowed
}) => {
  console.log(isSpinnerShowed);
  return (
    <S.SingleQuestionContainer color={color}>
      <S.Question>{question}</S.Question>
      <S.Icon color={color}>
        <Icon icon={icon} />
      </S.Icon>
      <S.Author>
        Autor: <span>{author}</span>
      </S.Author>

      <S.Button>Pokaż odpowiedzi (3)</S.Button>

      <S.LikeBox>
        <S.AllLikes>{likes}</S.AllLikes>
        <S.LikeButton
          disabled={isSpinnerShowed && "true"}
          isDisabled={isSpinnerShowed && "true"}
          type="like"
          onClick={() => onClick({ id, value: 1 })}
          className="far fa-thumbs-up"
        />
        <S.LikeButton
          disabled={isSpinnerShowed}
          type="dislike"
          onClick={() => onClick({ id, value: -1 })}
          className="far fa-thumbs-down"
        />
      </S.LikeBox>
    </S.SingleQuestionContainer>
  );
};

export default SingleQuestionContainer;

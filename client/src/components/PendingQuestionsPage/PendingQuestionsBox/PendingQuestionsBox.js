import React from "react";
import SingleQuestionContainer from "./SingleQuestionContainer/SingleQuestionContainer";
import * as S from "./styles";
const PendingQuestionsBox = ({ postRateQuestion, allPendingQuestions }) => {
  const pendingQuestionsToRender = allPendingQuestions.map(
    q =>
      q.isShowed && (
        <SingleQuestionContainer
          key={q._id}
          author={q.author}
          date={q.date}
          id={q._id}
          question={q.question}
          icon={q.icon}
          color={q.color}
          likes={q.likes}
          isLiked={q.isLiked}
          onClick={postRateQuestion}
        />
      )
  );

  return (
    <S.PendingQuestionsBox>{pendingQuestionsToRender} </S.PendingQuestionsBox>
  );
};

export default PendingQuestionsBox;

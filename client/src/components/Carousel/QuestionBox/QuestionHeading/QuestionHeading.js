import React from "react";
import * as S from "./styles";

const QuestionHeading = ({ index, allSlides, color, level }) => {
  const currentNumber = index > allSlides.length ? allSlides.length : index + 1;
  const currentBoxLength = allSlides.length;
  console.log(currentNumber);
  return (
    <S.QuestionHeading>
      <S.Text>Pytanie</S.Text>
      <S.Box color={color}>
        {currentNumber}/{currentBoxLength}
      </S.Box>
      <S.Text type="levelText">Poziom</S.Text>
      <S.Box level={level} color={color} type="levelBox">
        {level}
      </S.Box>
    </S.QuestionHeading>
  );
};

export default QuestionHeading;

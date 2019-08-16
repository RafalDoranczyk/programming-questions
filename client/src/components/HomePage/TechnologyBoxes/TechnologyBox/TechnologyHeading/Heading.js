import React from "react";
import * as S from "./styles";
const TechnologyHeading = ({ color, questionsNumber }) =>  (
    <S.QuestionNumber color={color}> Pytań: {questionsNumber}</S.QuestionNumber>
  );


export default TechnologyHeading;

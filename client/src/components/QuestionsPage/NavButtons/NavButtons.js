import React, { useEffect, useRef } from "react";
import * as S from "./styles";
import NavButton from "./NavButton/NavButton";

const NavButtons = ({
  chosenApprovedQuestions,
  currentApprovedQuestionIndex,
  chosenQuestionsTechnology,
  giveAnotherQuestion
}) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const elementWidth = 70; // one box size
    const currentScroll = elementWidth * currentApprovedQuestionIndex;
    elementRef.current.scrollLeft = currentScroll - elementWidth / 0.7;
  });

  const navButtons = chosenApprovedQuestions.map((btn, index) => (
    <NavButton
      isActive={currentApprovedQuestionIndex + 1 === index + 1}
      color={chosenQuestionsTechnology}
      key={index}
      text={index + 1}
      fn={() => giveAnotherQuestion(index)}
    />
  ));

  return (
    <S.NavButtons color={chosenQuestionsTechnology} ref={elementRef}>
      {navButtons}
    </S.NavButtons>
  );
};

export default NavButtons;

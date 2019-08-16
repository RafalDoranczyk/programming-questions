import React from "react";
import BottomButton from "./BottomButton/BottomButton";
import * as S from "./style";

const BottomButtons = ({
  giveAnotherQuestion,
  currentApprovedQuestionIndex,
  chosenApprovedQuestionsLength
}) => {
  const buttons = [
    {
      type: "next",
      icon: "fas fa-chevron-left",
      fn: () => giveAnotherQuestion(currentApprovedQuestionIndex - 1),
      isDisabled: currentApprovedQuestionIndex === 0 ? true : false
    },
    {
      type: "previous",
      icon: "fas fa-chevron-right",
      fn: () => giveAnotherQuestion(currentApprovedQuestionIndex + 1),
      isDisabled:
        currentApprovedQuestionIndex + 1 === chosenApprovedQuestionsLength
    }
  ];

  const buttonsToRender = buttons.map(btn => (
    <BottomButton
      key={btn.type}
      type={btn.type}
      icon={btn.icon}
      nextQuestionIndex={btn.nextQuestionIndex}
      fn={btn.fn}
      isDisabled={btn.isDisabled}
    />
  ));

  return <S.BottomNav>{buttonsToRender} </S.BottomNav>;
};

export default BottomButtons;

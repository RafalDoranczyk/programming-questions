import * as types from "./types";

export const navigationHandler = () => ({
  type: types.NAVIGATION_HANDLER
});

export const answerHandler = () => ({
  type: types.ANSWER_HANDLER
});

export const giveAnotherQuestion = questionIndex => ({
  type: types.GIVE_ANOTHER_QUESTION,
  questionIndex
});

export const filterPendingQuestions = chosenTechnologyForFilter => ({
  type: types.FILTER_PENDING_QUESTIONS,
  chosenTechnologyForFilter
});

export const giveChosenApprovedQuestions = chosenQuestionsTechnology => ({
  type: types.GIVE_CHOSEN_APPROVED_QUESTIONS,
  chosenQuestionsTechnology
});

export const changeChosenTechnology = chosenQuestionsTechnology => ({
  type: types.CHANGE_CHOSEN_TECHNOLOGY,
  chosenQuestionsTechnology
});

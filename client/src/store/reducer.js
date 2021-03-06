import * as types from "./types";
import * as C from "../constants";

const updateState = (state, newValues) => {
  return { ...state, ...newValues };
};

const initialState = {
  // APPROVED QUESTIONS
  createdTechnologyButtons: [],
  allApprovedQuestions: [],
  chosenApprovedQuestions: [],
  chosenQuestionsTechnology: "",
  chosenTechnologyForFilter: "",
  // PENDING QUESTIONS
  allPendingQuestions: [],
  chosenPendingQuestions: [],
  pendingTechnologies: [],
  // UX HANDLERS
  isMenuShowed: false,
  isAnswerShowed: false,
  isSpinnerShowed: false,
  isNavigationShowed: false,
  afterFormSubmitMessage: ""
};

// ASYNC ACTIONS
const fetchDataBegin = state => updateState(state, { isSpinnerShowed: true });

// MAIN FUNCTION, STARTS ON APP OPEN

const fetchApprovedQuestionsSucceeded = (state, allApprovedQuestions) => {
  localStorage.setItem(
    "allApprovedQuestions",
    JSON.stringify(allApprovedQuestions)
  );
  const createdTechnologyButtons = C.BUTTON_MODELS.filter(({ technology }) =>
    allApprovedQuestions.find(question => question.technology === technology)
  );
  createdTechnologyButtons.forEach(button => {
    let i = 0;
    allApprovedQuestions.map(question => {
      if (button.technology === question.technology) {
        i++;
      }
      return (button.questionsNumber = i);
    });
  });
  return updateState(state, {
    allApprovedQuestions,
    createdTechnologyButtons,
    isSpinnerShowed: false
  });
};
const fetchApprovedQuestionsFailure = (state, err) =>
  updateState(state, { isSpinnerShowed: false });

const checkAlreadyLikedQuestions = (allPendingQuestions, alreadyLiked) => {
  return allPendingQuestions.map(question => {
    alreadyLiked.find(liked => {
      if (liked === question._id) {
        return (question.isLiked = true);
      } else {
        return (question.isLiked = false);
      }
    });
    return question;
  });
};

const fetchPendingQuestionsSucceeded = (
  state,
  allPendingQuestions,
  alreadyLiked
) => {
  const pendingTechnologies = [
    ...new Set(allPendingQuestions.map(question => question.technology))
  ];

  allPendingQuestions.forEach(question => (question.isShowed = true));

  const updatedWithAlreadyLiked = checkAlreadyLikedQuestions(
    allPendingQuestions,
    alreadyLiked
  );

  updatedWithAlreadyLiked.forEach(question =>
    C.BUTTON_MODELS.find(model => {
      if (model.technology === question.technology) {
        question.icon = model.icon;
        question.color = model.color;
      }
    })
  );

  return updateState(state, {
    allPendingQuestions: updatedWithAlreadyLiked,
    pendingTechnologies,
    isSpinnerShowed: false
  });
};
const fetchPendingQuestionsFailure = (state, err) => {
  return updateState(state, { isSpinnerShowed: false });
};

// FUNCTION ALLOWS USER TO SEND HIS OWN QUESTION
const postDataBegin = state => {
  return updateState(state, { isSpinnerShowed: true });
};
const postUserQuestionSucceeded = state => {
  localStorage.removeItem("allQuestions");
  return updateState(state, {
    isSpinnerShowed: false
  });
};
const postUserQuestionFailure = state =>
  updateState(state, { isSpinnerShowed: false });

const postRateQuestionSucceeded = (state, likes, id, alreadyLiked) => {
  const allPendingQuestions = state.allPendingQuestions.slice();
  const index = allPendingQuestions.findIndex(question => question._id === id);
  allPendingQuestions[index].likes = likes;

  const updatedWithAlreadyLiked = checkAlreadyLikedQuestions(
    allPendingQuestions,
    alreadyLiked
  );

  return updateState(state, {
    isSpinnerShowed: false,
    allPendingQuestions: updatedWithAlreadyLiked
  });
};

const postRateQuestionFailure = (state, error) => {
  console.log(error);
  return updateState(state, { isSpinnerShowed: false });
};
// SYNC ACTIONS

const filterPendingQuestions = (state, chosenTechnologyForFilter) => {
  let allPendingQuestions = state.allPendingQuestions.slice();
  if (chosenTechnologyForFilter === "Wszystkie") {
    allPendingQuestions.forEach(question => (question.isShowed = true));
  } else {
    allPendingQuestions.forEach(question => {
      if (question.technology !== chosenTechnologyForFilter) {
        question.isShowed = false;
      } else {
        question.isShowed = true;
      }
    });
  }

  return updateState(state, {
    allPendingQuestions,
    chosenTechnologyForFilter
  });
};

// UX HANDLERS

const answerHandler = state =>
  updateState(state, {
    isAnswerShowed: !state.isAnswerShowed
  });

const menuItemHandler = state => {
  localStorage.removeItem("slideIndex");
  return updateState(state, {
    chosenQuestionsTechnology: "",
    isNavigationShowed: !state.isNavigationShowed,
    isMenuShowed: !state.isMenuShowed,
    chosenTechnologyForFilter: ""
  });
};

const navigationHandler = state =>
  updateState(state, {
    isNavigationShowed: !state.isNavigationShowed,
    isMenuShowed: !state.isMenuShowed
  });

const changeChosenTechnology = (state, chosenQuestionsTechnology) =>
  updateState(state, { chosenQuestionsTechnology });

const giveChosenApprovedQuestions = (state, chosenQuestionsTechnology) => {
  const allApprovedQuestionsFromStorage = JSON.parse(
    localStorage.getItem("allApprovedQuestions")
  );

  const allApprovedQuestions =
    allApprovedQuestionsFromStorage || state.allApprovedQuestions;
  const chosenApprovedQuestions = allApprovedQuestions.filter(
    question => question.technology === chosenQuestionsTechnology
  );

  return updateState(state, {
    chosenApprovedQuestions,
    chosenQuestionsTechnology
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ASYNC
    // fetches
    case types.FETCH_DATA_BEGIN:
      return fetchDataBegin(state);
    case types.FETCH_APPROVED_QUESTIONS_FAILURE:
      return fetchApprovedQuestionsFailure(state, action.err);
    case types.FETCH_PENDING_QUESTIONS_FAILURE:
      return fetchPendingQuestionsFailure(state, action.err);
    case types.FETCH_APPROVED_QUESTIONS_SUCCEEDED:
      return fetchApprovedQuestionsSucceeded(
        state,
        action.allApprovedQuestions
      );
    case types.FETCH_PENDING_QUESTIONS_SUCCEEDED:
      return fetchPendingQuestionsSucceeded(
        state,
        action.allPendingQuestions,
        action.alreadyLiked
      );

    //post's
    case types.POST_DATA_BEGIN:
      return postDataBegin(state);
    case types.POST_USER_QUESTION_SUCCEEDED:
      return postUserQuestionSucceeded(state, action);
    case types.POST_USER_QUESTION_FAILURE:
      return postUserQuestionFailure(state, action);
    case types.POST_RATE_QUESTION_SUCCEEDED:
      return postRateQuestionSucceeded(
        state,
        action.likes,
        action.id,
        action.alreadyLiked
      );
    case types.POST_RATE_QUESTION_FAILURE:
      return postRateQuestionFailure(state, action);
    // SYNC ACTIONS

    case types.CHANGE_CHOSEN_TECHNOLOGY:
      return changeChosenTechnology(state, action.chosenQuestionsTechnology);
    case types.GIVE_CHOSEN_APPROVED_QUESTIONS:
      return giveChosenApprovedQuestions(
        state,
        action.chosenQuestionsTechnology
      );
    case types.ANSWER_HANDLER:
      return answerHandler(state);
    case types.NAVIGATION_HANDLER:
      return navigationHandler(state);
    case types.FILTER_PENDING_QUESTIONS:
      return filterPendingQuestions(state, action.chosenTechnologyForFilter);
    case types.MENU_ITEM_HANDLER:
      return menuItemHandler(state);
    default:
      return state;
  }
};

export default reducer;

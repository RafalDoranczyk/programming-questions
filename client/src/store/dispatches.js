import * as types from "./types";
//API
const getApprovedQuestionsAPI = "/api/questions-approved";
const getPendingQuestionsAPI = "/api/questions-pending";
const postUserQuestionAPI = "/api/questions-pending-send";
const postGiveLikeToQuestionAPI = "/api/questions-like";

const get = api =>
  fetch(api, { method: "GET" })
    .then(res => res.json())
    .catch(error => handleErrors(error));

const post = (api, payload) =>
  fetch(api, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json" }
  })
    .then(res => res.json())
    .catch(error => handleErrors(error));

// FETCHES
export const fetchDataBegin = () => ({
  type: types.FETCH_DATA_BEGIN
});

export const fetchApprovedQuestionsSucceeded = allApprovedQuestions => ({
  type: types.FETCH_APPROVED_QUESTIONS_SUCCEEDED,
  allApprovedQuestions
});

export const fetchApprovedQuestionsFailure = err => ({
  type: types.FETCH_APPROVED_QUESTIONS_FAILURE,
  err
});

export const fetchApprovedQuestions = () => dispatch => {
  dispatch(fetchDataBegin());
  const allApprovedQuestionsFromStorage = JSON.parse(
    localStorage.getItem("allApprovedQuestions")
  );
  allApprovedQuestionsFromStorage
    ? dispatch(fetchApprovedQuestionsSucceeded(allApprovedQuestionsFromStorage))
    : get(getApprovedQuestionsAPI)
        .then(res => dispatch(fetchApprovedQuestionsSucceeded(res)))
        .catch(error => dispatch(fetchApprovedQuestionsFailure(error)));
};

export const fetchPendingQuestionsSucceeded = allPendingQuestions => ({
  type: types.FETCH_PENDING_QUESTIONS_SUCCEEDED,
  allPendingQuestions
});

export const fetchPendingQuestionsFailure = err => ({
  type: types.FETCH_PENDING_QUESTIONS_FAILURE,
  err
});

export const fetchPendingQuestions = () => dispatch => {
  dispatch(postDataBegin());
  return get(getPendingQuestionsAPI)
    .then(res => dispatch(fetchPendingQuestionsSucceeded(res)))
    .catch(error => dispatch(fetchPendingQuestionsFailure(error)));
};

export const postDataBegin = () => ({
  type: types.POST_DATA_BEGIN
});

export const postUserQuestionSucceeded = () => ({
  type: types.POST_USER_QUESTION_SUCCEEDED
});

export const postUserQuestionFailure = () => ({
  type: types.POST_USER_QUESTION_FAILURE
});

export const postUserQuestion = payload => dispatch => {
  dispatch(postDataBegin());
  return post(postUserQuestionAPI, payload)
    .then(res => dispatch(postUserQuestionSucceeded(res)))
    .catch(error => dispatch(postUserQuestionFailure(error)));
};

export const postRateQuestionSucceeded = ({ likes, id }) => ({
  type: types.POST_RATE_QUESTION_SUCCEEDED,
  likes,
  id
});
export const postRateQuestionFailure = error => ({
  type: types.POST_RATE_QUESTION_FAILURE,
  error
});

export const postRateQuestion = (id, value) => dispatch => {
  dispatch(postDataBegin());
  return post(postGiveLikeToQuestionAPI, id, value)
    .then(res => dispatch(postRateQuestionSucceeded(res)))
    .catch(err => dispatch(postRateQuestionFailure(err)));
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

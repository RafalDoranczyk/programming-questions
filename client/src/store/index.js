import * as syncActions from "./actions";
import * as asyncActions from "./dispatches";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunk));

const actions = {
  ...syncActions,
  ...asyncActions
};

export default actions;

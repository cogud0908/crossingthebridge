import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const SET_LENGTH = "input/SET_LENGTH";
const SET_WEIGHT = "input/SET_WEIGHT";
const SET_VALUES = "input/SET_VALUES";

export const setLength = createAction(SET_LENGTH);
export const setWeight = createAction(SET_WEIGHT);
export const setValues = createAction(SET_VALUES);

const initialState = Map({
  length: 0,
  weight: 0,
  values: []
});

export default handleActions(
  {
    [SET_LENGTH]: (state, action) => {
      return state.set("length", action.payload);
    },
    [SET_WEIGHT]: (state, action) => {
      return state.set("weight", action.payload);
    },
    [SET_VALUES]: (state, action) => {
      return state.set("values", action.payload);
    }
  },
  initialState
);

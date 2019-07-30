import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const SET_LEFTWEIGHTS = "view/SET_LEFTWEIGHTS";
const SET_RIGHTWEIGHTS = "view/SET_RIGHTWEIGHTS";
const SET_BRIDGE = "view/SET_BRIDGE";

const SET_TOTALWEIGHT = "view/SET_TOTALWEIGHT";

export const setLeftWeights = createAction(SET_LEFTWEIGHTS);
export const setRightWeights = createAction(SET_RIGHTWEIGHTS);
export const setBridge = createAction(SET_BRIDGE);

export const setTotalWeight = createAction(SET_TOTALWEIGHT);

const initailState = Map({
  leftWeights: [],
  rightWeights: [],
  bridge: [],
  totalWeight: 0
});

export default handleActions(
  {
    [SET_LEFTWEIGHTS]: (state, action) => {
      return state.set("leftWeights", action.payload);
    },
    [SET_RIGHTWEIGHTS]: (state, action) => {
      return state.set("rightWeights", action.payload);
    },
    [SET_BRIDGE]: (state, action) => {
      return state.set("bridge", action.payload);
    },
    [SET_TOTALWEIGHT]: (state, action) => {
      return state.set("totalWeight", action.payload);
    }
  },
  initailState
);

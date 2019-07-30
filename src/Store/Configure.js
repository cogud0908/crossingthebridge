import { createStore } from "redux";
import modules from "./Modules";

const Configure = () => {
  const store = createStore(modules);
  return store;
};

export default Configure;

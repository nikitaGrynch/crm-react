import { legacy_createStore as createStore, combineReducers } from "redux";
import reducerCounter from "./reducerCounter";
import reducerPhone from "./reducerPhone";
import reducerTodo from "./reducerTodo";
const combReducers = combineReducers({
  counterReducer: reducerCounter,
  phoneReducer: reducerPhone,
  todoReducer: reducerTodo,
});
const store = createStore(combReducers);
export default store;

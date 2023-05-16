import IAction from "./IAction";

const defaultCounter = {counter: 100};

const reducerCounter = (state = defaultCounter, action: IAction) => {
    switch (action.type) {
      case "UP":
        return {
          ...state,
          counter: state.counter + 1,
        }
      case "DOWN":
        return {
          ...state,
          counter: state.counter - 1,
        }
      default:
        return state;
    }
  };

  export default reducerCounter;
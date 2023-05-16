import IAction from "./IAction";
import ITodo from "./ITodo";

const defaultState = { todos: [{ id: 1, title: "task 1" }] };

const reducerTodo = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DEL_TODO":
        return{
            ...state,
            todos: state.todos.filter((el: ITodo) => el.id !== action.payload)
        }
    default:
      return state;
  }
};

export default reducerTodo;

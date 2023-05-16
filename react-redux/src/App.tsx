import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import ITodo from "./redux/ITodo";
import { useRef } from "react";

function App() {
  const inputRef: any = useRef();

  const counter = useSelector((state: any) => state.counterReducer.counter);
  const amount = useSelector((state: any) => state.phoneReducer.amount);
  const todos: ITodo[] = useSelector((state: any) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const up = () => {
    dispatch({ type: "UP" });
  };
  const down = () => {
    dispatch({ type: "DOWN" });
  };

  const add = () => {
    dispatch({ type: "ADD", payload: 200 });
  };

  const del = () => {
    dispatch({ type: "DEL", payload: 50 });
  };

  const addTodo = () => {
    const title = inputRef.current.value;
    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title: title } });
  };

  const deleteTodo = (id: number) => {
    dispatch({type: "DEL_TODO", payload: id})
  }

  const keyHandler = (event: any) => {
    if (event.key == "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Redux + React</h1>

      <div className="card">
        <p>Counter {counter}</p>
        <button onClick={up}>UP</button>
        <button onClick={down}>DOWN</button>
      </div>

      <div className="card">
        <p>Amount {amount}</p>
        <button onClick={add}>ADD</button>
        <button onClick={del}>DELETE</button>
      </div>

      <div className="card">
        <input type="text" ref={inputRef} onKeyDown={keyHandler}/>
        <button onClick={addTodo}>Add Todo</button>
        {todos.length ? (
          todos.map((el: ITodo, index: number) => {
            return <div key={index} style={{padding: "10px", border: "1px solid black", borderRadius: "5px"}} onClick={() => deleteTodo(el.id)}>{el.title}</div>;
          })
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </>
  );
}

export default App;

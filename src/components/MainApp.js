import React, { useState, useCallback, useReducer } from "react";
import Hello from "./Hello";
import useFetch from "./useFetch";
import Bye from "./Bye";
import ListItem from './ListItem';


export const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todo: [...state.todo, { data: action.payload, complete: false }],
      };
    case "toggle-todo":
      return {
        todo: state.todo.map((res, idx) =>
          action.payload === idx ? { ...res, complete: !res.complete } : res
        ),
      };
    default:
      return state.todo;
  }
};

export default function MainApp({ expenses }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [count, setCount] = useState(0);
  const url = `https://randomuser.me/api?page=${pageNumber}`;
  const { data, loading } = useFetch(url);
  const [showHello, setShowHello] = useState(true);
  const [{ todo }, dispatch] = useReducer(reducer, { todo: [] });
  const [text, setText] = useState("");
  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <div>
        <button onClick={() => setPageNumber(pageNumber + 1)}> Click</button>
      </div>
      <div>{loading ? "loading..." : data}</div>
      <button onClick={() => setShowHello(!showHello)}> toggle</button>
      {showHello && <Hello />}
      <Bye increment={increment} />
      <div>{count}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", payload: text });
          setText("");
        }}
      >
        <input
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {todo.map((res, index) => {
        return (
          <div
            style={{ textDecoration: res.complete ? "line-through" : "" }}
            key={index}
            onClick={() => dispatch({ type: "toggle-todo", payload: index })}
          >
            {res.data}
          </div>
        );
      })}
      <div className="expenses">
        {expenses.length===0?  
          (<p>Nothing</p>):
          (expenses.map((res) => {
            return <ListItem key={res.id} className="hello" {...res} /> 
          }))
        }
      </div>
      {/* <input type="email" onChange={(e)=> setInput(e.target.value)}/> */}
    </div>
  );
}

// export default MainApp;

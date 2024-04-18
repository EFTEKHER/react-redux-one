import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../redux/todoredux/todoSlice";
import TodoUpdate from "./TodoUpdate";
const Todolist = () => {
  const todos = useSelector((state) => state.todos);

  

  const dispatch = useDispatch();
  
  return (
    <div className="w-full h-[100vh]  overflow-y-auto scroll-smooth bg-slate-700">
      {todos.map((todo) => (
        <div key={todo.id} className="flex flex-col flex-wrap w-full  space-y-4 py-4 ">
          <div className="w-full flex flex-row justify-center space-x-1">
            <li className="list-none bg-pink-700 w-[80%] h-8 rounded shadow-md items-start text-start" >{todo.text} </li>
            <button
              className="bg-slate-600 text-[white] w-8 h-8"
              onClick={() => dispatch(removeTodo(todo.id))}>
              X
            </button>
           
            </div>
            <TodoUpdate id={todo.id}/>
          
        </div>
      ))}
    </div>
  );
};

export default Todolist;

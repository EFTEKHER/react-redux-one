import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,editTodo} from "../redux/todoredux/todoSlice";
const Todolist = () => {
  const todos = useSelector((state) => state.todos);

  const handleEdit =  (id, e) => {
    const newText = e.target.value;
    dispatch(editTodo({ id, newText }));
  };
  
  const [isReadOnly, setIsReadOnly] = useState(true);
  const toggleReadOnly = () => {
    setIsReadOnly(prevState => !prevState); // Toggle the read-only state
};
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100vh]  overflow-y-auto scroll-smooth bg-slate-700">
      {todos.map((todo) => (
        <li key={todo.id} className="flex flex-wrap w-full space-y-4 py-4 ">
          <div className="w-full flex justify-center space-x-1">
            {" "}
            <input
              type="text"
              value={todo.text}
              className="bg-slate-800 w-[70%] h-8 text-[white]"
              onChange={(e)=>dispatch(handleEdit(todo.id,e))}
              readOnly={isReadOnly}
            />
            <button
              className="bg-slate-600 text-[white] w-8 h-8"
              onClick={() => dispatch(removeTodo(todo.id))}>
              X
            </button>
            <button
              className="bg-slate-600 text-[white] w-8 h-8"
              onClick={toggleReadOnly}>
              Edit
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;

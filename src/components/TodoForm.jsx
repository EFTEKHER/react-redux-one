import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoredux/todoSlice'
import { useState } from 'react'
const TodoForm = () => {
    const dispatch=useDispatch();
    const [input,setInput]=useState('');
    const todoAdded=(e)=>{
        e.preventDefault();
        if (input.trim() !== '') { // Check if input is not empty
            dispatch(addTodo({ text: input })); // Pass an object with 'text' property
            setInput('');
        }
    }
  return (
    <div>
      <form onClick={todoAdded} className='space-y-6'>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  className='w-full bg-slate-700 border-s-pink-50 h-10 px-4 rounded-md text-[white] leading-relaxed' placeholder='Enter text here'/>
    <button className='bg-gradient-to-r from-slate-600 to-violet-400 text-[white] font-bold rounded shadow-2xl hover:bg-gradient-to-l w-40 h-10 p-auto'>submit</button>
      </form>
    </div>
  )
}

export default TodoForm

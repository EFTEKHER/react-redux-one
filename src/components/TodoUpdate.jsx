import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/todoredux/todoSlice';
const TodoUpdate = ({id}) => {
    const [update,setUpdate]=useState(false);
    const toggle=()=>{
        setUpdate((prev)=>!prev)
    }
    const [newvalue,setNewValue] =useState('')
    const dispatch = useDispatch();
    const updated =(id)=>{
      const text= newvalue;
      dispatch(editTodo({
          id: id,
          newText:text
      }))
      setNewValue("")
      toggle()
    }
  return (
    <div>
    <div className="flex flex-col w-[full] space-y-4 mx-8 justify-center">
    {
        update? <div className='flex flex-col justify-center space-y-6'> <input type="text" value={newvalue} className='w-[70vw] h-[10vh] bg-slate-900 text-[white] text start rounded ' placeholder="Updated text" onChange={(e)=>setNewValue(e.target.value)} />
        <button className='w-15 bg-slate-800 h-6 border-white text-[white] hover:bg-slate-400' onClick={()=>updated(id)} >submit </button></div>: <div> <button className='w-10 bg-slate-800 h-6 border-white text-[white] hover:bg-slate-400' onClick={toggle}>Edit</button></div> 
    }
    </div>
    
    </div>
  )
}

export default TodoUpdate

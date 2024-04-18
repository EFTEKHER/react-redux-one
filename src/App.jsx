import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import Todolist from './components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='bg-gradient-to-l from-violet-500 to-pink-500 w-full h-[100vh] flex flex-col px-10 py-8 space-y-4'>
   <TodoForm/>
   <Todolist/>
   </div>
    </>
  )
}

export default App

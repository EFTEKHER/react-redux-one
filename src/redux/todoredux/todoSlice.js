import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initialState={
    todos: [{
        id:1,
        text:"Hello world",

    }]
}

export const todoSlice=createSlice({
name: "todo",
initialState,
reducers:{
    addTodo:(state,action)=>{
        const todo={
            id:nanoid(),
            text:action.payload.text
        }

        state.todos.push(todo);
        console.log('todo added');
    },

    removeTodo:(state,action)=>{
    state.todos= state.todos.filter((todo)=>todo.id !==action.payload)
    console.log('removeTodo');
    },

    editTodo:(state,action)=>{
        const {id, newText}=action.payload;
        let todoUpdate= state.todos.find(todo=>todo.id===id);
        if(todoUpdate)
        {
            todoUpdate.text=newText;
            console.log('updated');
        }
    }
}
})

export const {addTodo,removeTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer;

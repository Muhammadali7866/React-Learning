import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        // add todp 
        addTodo: (state,action)=>{
            const newTodo = {
                id:Date.now(),
                text:action.payload.text,
                completed:false
            }
            state.push(newTodo)
        },
        // action to make the status completed
        toggleTodo : (state,action)=>{            
            const todo = state.find(item => item.id == action.payload.id);
            if (!todo) return;
            todo.completed = !todo.completed;
            
        },

        // delete Todo 
        deleteTodo: (state,action)=>{            
            const id = action.payload.id;
            const index = state.findIndex(todo => todo.id === id);
            if (index !== -1) {
              state.splice(index, 1); // remove the item by index
            }
        }
    }
})

export const {addTodo,toggleTodo,deleteTodo} = todoSlice.actions

export default todoSlice
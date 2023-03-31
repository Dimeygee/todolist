

import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    todos: [
        { id: 839, text: "Read a book", checked: false }   
    ], 
    completed : []
}


export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action){
            state.todos.push(action.payload)
        },
        removeTodo(state, action){
            const removetodos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos = removetodos
            const completedTodo = state.completed.find(todo => todo.id === action.payload)
            if(completedTodo){
                if(completedTodo.checked){
                    const newCompleted = state.completed.filter(todo => todo.id !== completedTodo.id)
                    state.completed = newCompleted
                }
            }
            
        },
        editTodo(state, action) {
            const todo =  state.todos.find(todo => todo.id === action.payload.id)
            todo.text = action.payload.text
        },
        toggletodo(state, action){
            const toggletodo =  state.todos.find(todo => todo.id === action.payload)
            toggletodo.checked = !toggletodo.checked
            if(toggletodo.checked){
                state.completed.push(toggletodo)
            }
            if(!toggletodo.checked){
                const completed = state.completed.filter(todo => todo.id !== toggletodo.id)
                state.completed = completed
            }
        }, 
        removecheckedTodo ( state ) {
            const checkedtodos = state.todos.filter(todo => !todo.checked)
            state.todos = checkedtodos
            state.completed = []

        }
    }
})

export const { addTodo, removeTodo, editTodo, toggletodo , removecheckedTodo} = TodoSlice.actions

export default TodoSlice.reducer
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { todo } from "../../type"
import { IGetAllPayload } from "../../services/todoService"

export interface todosState{
    todos:todo[] | null
    todo: todo | null
    isLoading: boolean
    error: string | null
}

const initialState: todosState = {
    todos: null,
    todo: null,
    isLoading: false,
    error: null
}

const todosReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // Get all
        getAllTodos: (state, action: PayloadAction<IGetAllPayload | null>) => {
            state.isLoading = true
            state.error = null
        },
        getAllTodosFullfilled: (state, action: PayloadAction<todo[]>) => {
            state.isLoading = false
            state.error = null

            state.todos = action.payload
        },
        getAllTodosRejected: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        // Get Todos By Id
        getTodo: (state, action: PayloadAction<string>) => {
            state.isLoading = true
            state.error = null
        },
        getTodoFullfilled: (state, action: PayloadAction<todo>) => {
            state.isLoading = false
            state.error = null

            state.todo = action.payload
        },
        getTodoRejected: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        // Create Todo
        createTodo: (state, action: PayloadAction<todo>) => {
            state.isLoading = true
            state.error = null
        },
        createTodoFullfilled: (state, action: PayloadAction<todo>) => {
            state.isLoading = false
            state.error = null

            state.todos?.push(action.payload)
        },
        createTodoRejected: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
        
        // Update Todo
        updateTodo: (state, action: PayloadAction<todo>) => {
            state.isLoading = true
            state.error = null
        },
        updateTodoFullfilled: (state, action: PayloadAction<todo>) => {
            state.isLoading = false
            state.error = null

            state.todos = state.todos?.map(todo => {
                if(todo.id == action.payload.id){
                    return action.payload
                }else{
                    return todo
                }
            }) ?? state.todos
        },
        updateTodoRejected: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        // Selected
        selectedTodo: (state, action: PayloadAction<number>) => {
            state.todo = state.todos?.find(val => val.id == action.payload) ?? null
        },

        // Delete Todos
        deleteTodo: (state, action: PayloadAction<number | null>) => {
            state.isLoading = true
            state.error = null
        },
        deleteTodoFullfilled: (state, action: PayloadAction<number>) => {
            state.isLoading = false
            state.error = null

            state.todos = state.todos ? state.todos.filter(todo => todo.id != action.payload) : state.todos
        },
        deleteTodoRejected: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {
    getAllTodos,
    getAllTodosFullfilled,
    getAllTodosRejected,
    createTodo,
    createTodoFullfilled,
    createTodoRejected,
    updateTodo,
    updateTodoFullfilled,
    updateTodoRejected,
    deleteTodo,
    deleteTodoFullfilled,
    deleteTodoRejected,
    selectedTodo
} = todosReducer.actions

export default todosReducer.reducer


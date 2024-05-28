import { IGetAllPayload, TodoService } from "../../services/todoService";
import {call, put, takeEvery} from "redux-saga/effects"
import { createTodo, createTodoFullfilled, createTodoRejected, deleteTodo, deleteTodoFullfilled, deleteTodoRejected, getAllTodos, getAllTodosFullfilled, getAllTodosRejected, updateTodo, updateTodoFullfilled, updateTodoRejected } from "../reducers/todosReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { todo } from "../../type";
import store, { RootState } from "../store";

function* getAllTodosSaga(action: PayloadAction<IGetAllPayload | null>){
    try{
        const data: todo[] = yield call(TodoService.getAll, action.payload)
        const state: RootState = store.getState()

        if(state.todos.todos){
            yield put(getAllTodosFullfilled(state.todos.todos))
        }else{
            yield put(getAllTodosFullfilled(data.slice(0,10)))   
        }
    }catch(e: any){
        yield put(getAllTodosRejected(e.message))
    }
}

function* createTodoSaga(action: PayloadAction<todo>){
    try{
        const data: todo = yield call(TodoService.create, action.payload)
        yield put(createTodoFullfilled(data))
    }catch(e: any){
        yield put(createTodoRejected(e.message))
    }
}

function* updateTodoSaga(action: PayloadAction<todo>){
    try{
        const data: todo = yield call(TodoService.update, action.payload)
        yield put(updateTodoFullfilled(data))
    }catch(e: any){
        yield put(updateTodoRejected(e.message))
    }
}

function* deleteTodoSaga(action: PayloadAction<number>){
    try{
        const data: number = yield call(TodoService.delete, action.payload)
        yield put(deleteTodoFullfilled(data))
    }catch(e: any){
        yield put(deleteTodoRejected(e.message))
    }
}

export function* watchGetAllTodos(){
    yield takeEvery(getAllTodos.type, getAllTodosSaga)
    yield takeEvery(createTodo.type, createTodoSaga)
    yield takeEvery(updateTodo.type, updateTodoSaga)
    yield takeEvery(deleteTodo.type, deleteTodoSaga)
}
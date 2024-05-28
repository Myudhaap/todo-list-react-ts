/* eslint-disable @typescript-eslint/no-unused-vars */
import placeholderInstance from "../apis/placeholderInstance"
import store, { RootState } from "../store/store"
import { todo } from "../type"

export interface IFilter{
    filterBy?: string
    keyword?: string
}

export interface IParams{
    filter?: IFilter
    page: number
    perPage: number
    totalRecords: number
    totalPage: number 
}

export interface IGetAllPayload{
    params: IParams
}

export class TodoService{
    static async getAll(payload: IGetAllPayload | null): Promise<todo[]>{
        try{
            const state: RootState = store.getState()

            if(state.todos.todos){
                return state.todos.todos
            }else{
                const res = await placeholderInstance.get<todo[]>("/todos")
                return res.data
            }
        }catch(e: any){
            throw new Error(e.message)
        }
    }

    static async create(payload: todo): Promise<todo>{
        try{
            const res = await placeholderInstance.post<todo>("/todos", payload)

            const state: RootState = store.getState()
            
            if(state.todos.todos?.find(todo => todo.id == res.data.id)){
                const max = Math.max(...state.todos.todos.map(todo => todo.id ? todo.id : 0)) + 1
                return {
                    ...res.data,
                    id: max
                }
            }else{
                return res.data
            }
        }catch(e: any){
            throw new Error(e.message)
        }
    }

    static async update(payload: todo): Promise<todo>{
        try{
            const res = await placeholderInstance.put<todo>(`/todos/${payload.id}`, payload)
            return res.data
        }catch(e: any){
            const state: RootState = store.getState()
            
            if(state.todos.todos?.find(todo => todo.id == payload.id)){
                return payload
            }else{
                throw new Error(e.message)
            }
        }
    }

    static async delete(payload: number): Promise<number>{
        try{
            await placeholderInstance.delete<any>(`/todos/${payload}`)
            return payload
        }catch(e: any){
            throw new Error(e.message)
        }
    }
}
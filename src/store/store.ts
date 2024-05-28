import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import todosReducer from './reducers/todosReducer'
import { watchGetAllTodos } from './sagas/todoSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        todos: todosReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleware) 
})

sagaMiddleware.run(watchGetAllTodos)

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
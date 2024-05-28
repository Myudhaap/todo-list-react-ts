import { RouterProvider } from "react-router-dom"
import { router } from "./routers/Routes"
import { Provider } from "react-redux"
import {ToastContainer} from "react-toastify"
import store from "./store/store"

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
       position="top-right"
       autoClose={5000}
       closeOnClick
       theme="light"
      />
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App

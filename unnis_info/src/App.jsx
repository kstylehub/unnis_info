import { useState } from 'react'
import {RouterProvider} from 'react-router-dom'
import router from './Router/Router'
import {Provider} from 'react-redux'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import store from './Store';

function App() {

  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </>
  )
}

export default App

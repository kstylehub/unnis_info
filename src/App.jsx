import { useState } from 'react'
import {RouterProvider} from 'react-router-dom'
import router from './Router/Router'
import {Provider} from 'react-redux'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {persistor, store} from './Store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import { configureStore } from '@reduxjs/toolkit'
import { Provider} from 'react-redux'
import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import  Login  from './components/Login';
import {store} from "./features/store"


function App() {

  return (
    <>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            
          </Routes>
        </Provider>
    </>
  )
}

export default App

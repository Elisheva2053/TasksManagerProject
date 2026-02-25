// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import { configureStore } from '@reduxjs/toolkit'
import {provider} from 'react-redux'
import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import  Login  from './components/Login';

function App() {

  const myStore=configureStore({
    reducer:{

    }
  })

  return (
    <>
        <Provider store={myStore}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Counter" element={<Counter />} />
          </Routes>
        </Provider>
    </>
  )
}

export default App

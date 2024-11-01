import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './Signup'
import LoginForm from './Login'


const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignupForm/>}/>
      <Route path='/' element={<LoginForm/>}/>

    </Routes>
  )
}

export default App
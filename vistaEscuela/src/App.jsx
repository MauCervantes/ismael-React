import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import StudentNew from './components/StudentNew'

const App = () => {
  return (
    //Definims las rutas de la aplicacion
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/student' element={<StudentNew/>}/>
    </Routes>
  )
}

export default App

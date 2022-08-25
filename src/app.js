import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setting from './context/setting/settingContext'

import ToDo from './components/todo/todo.js';
import Hestory from './Hestory.jsx';

export default function app() {
  return (
    <Setting>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ToDo />}/>
    <Route path='/hestory' element={<Hestory/>}/>
    </Routes>
    </BrowserRouter>
    </Setting>
  )
}

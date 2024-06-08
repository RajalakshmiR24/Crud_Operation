import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './components/CURD/create';
import Success from './components/success';
import Read from './components/CURD/read';
import Update from './components/CURD/Update';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='/success' element={<Success />} />
      <Route path='/read' element={<Read />} />
      <Route path='/edit/:id' element={<Update />} />



    </Routes>
  );
}

export default App;

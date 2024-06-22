import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/Update';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='/read' element={<Read />} />
      <Route path='/edit/:id' element={<Update />} />
    </Routes>
  );
}

export default App;

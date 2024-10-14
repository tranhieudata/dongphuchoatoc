
import { useEffect, useState } from 'react';
import './App.css';
import Designer from './Component/DesignerComponent/Designer';
import Sale from './Component/SaleComponent/Sale';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import { Routes, Route,Redirect, Switch } from 'react-router-dom';
import Homepage from './Component/Homepage';





function App() {


  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default App;

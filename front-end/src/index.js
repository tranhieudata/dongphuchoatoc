import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Component/HeaderComponent/Header';
import Sale from './Component/SaleComponent/Sale';
import Admin from './Component/Admin/Admin';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App/>
  </Router>
);



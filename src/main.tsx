import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BankTransfer from './components/BankTransfer.tsx';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/banktransfer" element={<BankTransfer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

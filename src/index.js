import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider';
import App from './App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);


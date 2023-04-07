import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { RouterProvider } from 'react-router-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { LoginProvider } from './context/LoginContext';
// import routes from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={routes} />
    </LoginProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css'
import { AuthContextProvider } from './context/authContext.tsx';
import { ThemeContextProvider } from './context/themeContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

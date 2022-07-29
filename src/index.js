import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'styleConfig/theme';
import { ThemeProvider } from 'styled-components';
import { App } from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

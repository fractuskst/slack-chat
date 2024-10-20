import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import store from './store/index.js';
import App from './App.jsx';

const root = createRoot(document.getElementById('chat'));
const socket = io();
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App socket={socket} />
    </Provider>
  </BrowserRouter>
);

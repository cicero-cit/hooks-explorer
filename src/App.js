import React from 'react';

import './assets/css/global.css';
import './assets/css/App.css';
import './assets/css/Sidebar.css';
import './assets/css/Main.css';
import './assets/css/ItemStyle.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App;

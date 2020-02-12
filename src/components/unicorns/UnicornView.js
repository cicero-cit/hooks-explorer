import React, { useState, useEffect, useReducer } from 'react';
import api from './../../API';

import './../../assets/global.css';
import './../../assets/App.css';
import './../../assets/Sidebar.css';
import './../../assets/Main.css';

import UnicornForm from './UnicornForm';
import UnicornItem from './UnicornItem';
import ReducerUnicorn from '../ReducerUnicorn';

function UnicornView() {
  const [unicorns, setUnicorns] = useState([]);
  
  useEffect(() => { 
    async function loadUnicorns() {
      const response = await api.get('/unicorns');

      setUnicorns(response.data);
    }

    loadUnicorns();
  }, []);

  async function handleAddUnicorn(data) {
    const response = await api.post('/unicorns', data)

    setUnicorns([...unicorns, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>New Unicorn</strong>
        <UnicornForm onSubmit={handleAddUnicorn} />
      </aside>

      <main>
        <ul>
          {unicorns.map(unicorn => (
            <UnicornItem key={unicorn._id} unicorn={unicorn} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default UnicornView;

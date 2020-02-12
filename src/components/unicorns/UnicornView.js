import React, { useState, useEffect, useReducer } from 'react';
import api from '../../API';

import UnicornForm from './UnicornForm';
import UnicornItem from './UnicornItem';
import ReducerUnicorn, { INITIAL_STATE } from './ReducerUnicorn';

function UnicornView() {
  const [unicorns, dispatch] = useReducer(ReducerUnicorn, INITIAL_STATE);
  const [editingItem, setEditingItem] = useState({});
  
  useEffect(() => { 
    loadUnicorns();
  }, []);

  async function loadUnicorns() {
    const { data } = await api.get('/unicorns');
    await dispatch({ type: 'GET_SUCCESS', data });
  }

  async function handleAddUnicorn(unicorn) {
    const { data } = await api.post('/unicorns', unicorn);
    dispatch({ type: 'POST_SUCCESS', data });
  }

  async function handleDelete(_id){
    const data = await api.delete(`/unicorns/${_id}`);
    dispatch({ type: 'DELETE_SUCCESS', data: {...data, _id} });
  }

  function handleClickId(id){
    dispatch({ type: 'CLICK_EDIT', id });
    setEditingItem(unicorns.list.find(item => item._id ===id));
  }

  async function handlePutUnicorn(unicorn){
    const data = await api.put(`/unicorns/${editingItem._id}`, unicorn);
    dispatch({ type: 'PUT_SUCCESS', data });
    loadUnicorns();
  }
  
  return (
    <div id="app">
      <aside>
        <strong>New Unicorn</strong>
          <UnicornForm 
            onSubmit={handleAddUnicorn} 
            onPut={handlePutUnicorn} 
            editingItem={editingItem}
          />
      </aside>

      <main>
        <ul>
          {unicorns.list.map(unicorn => (
            <UnicornItem 
              key={unicorn._id} 
              unicorn={unicorn} 
              handleDelete={handleDelete}
              handleClickId={handleClickId}
              editingItem={editingItem._id}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default UnicornView;

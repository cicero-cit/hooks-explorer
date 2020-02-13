import React, { useState, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import UnicornForm from './UnicornForm';
import UnicornItem from './UnicornItem';
import { getAllUnicorn, getByIdUnicorn } from './../ActionsUnicorn';

function UnicornView() {
  const [list, setList] = useState([]);

  const unicorns = useSelector(state => state.ReducerUnicorn.list);
  const dispatch = useDispatch();
  
  useEffect(() => loadUnicorns);
  useEffect(() => setList(unicorns), [unicorns]);
  
  const loadUnicorns = useMemo(() => {
    dispatch(getAllUnicorn());
  }, [dispatch])

  function handleClickId(id){
    setList(list.filter(item => item._id !== id));
    dispatch(getByIdUnicorn(id));
  }

  return (
    <div id="app">
      <aside>
        <strong>New Guy</strong>
          <UnicornForm />
      </aside>

      <main>
        <ul>
          {list.map(unicorn => (
            <UnicornItem 
              key={unicorn._id} 
              unicorn={unicorn}
              handleClickId={handleClickId}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default UnicornView;

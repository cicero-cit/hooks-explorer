import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TrashIcon from './../../assets/svg/trash.svg';
import EditIcon from './../../assets/svg/edit.svg';
import { deleteUnicorn, getAllUnicorn } from './../ActionsUnicorn';

function UnicornItem({ unicorn, handleClickId }) {
  const editing = useSelector(state => state.ReducerUnicorn.item);
  const dispatch = useDispatch();

  async function handleDelete(_id){
    dispatch(await deleteUnicorn(_id));
    dispatch(getAllUnicorn());
  }

  return (
    <li className="unicorn-item">
      <header>
        <div className="user-info">
          <strong data-testid="form-unicorn-name">{unicorn.name}</strong>  
          <span data-testid="form-unicorn-age">Age: {unicorn.age}</span>
        </div>              
      </header>
      <p data-testid="form-unicorn-colour">Color: {unicorn.colour}</p>
      <button 
        onClick={() => handleDelete(unicorn._id)}
        data-testid="form-unicorn-btn-delete"
      >
        <img src={TrashIcon} height="15" alt="delete icon"/>
      </button>
      <button 
        onClick={() => handleClickId(unicorn._id)} 
        disabled={!!editing._id}
        data-testid="form-unicorn-btn-edit"
      >
        <img src={EditIcon} height="15" alt="edit icon"/>
      </button>
    </li>
  );
}

export default memo(UnicornItem);

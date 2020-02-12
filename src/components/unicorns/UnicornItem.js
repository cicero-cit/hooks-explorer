import React from 'react';
import TrashIcon from './../../assets/svg/trash.svg';
import EditIcon from './../../assets/svg/edit.svg';
import './styles.css';

function UnicornItem({ unicorn, handleDelete, handleClickId, editingItem }) {
  return (
    <li className="unicorn-item">
      <header>
        <div className="user-info">
          <strong>{unicorn.name}</strong>  
          <span>Age: {unicorn.age}</span>
        </div>              
      </header>
      <p>Color: {unicorn.colour}</p>
      <button onClick={() => handleDelete(unicorn._id)}>
        <img src={TrashIcon} height="15" alt="delete icon"/>
      </button>
      <button onClick={() => handleClickId(unicorn._id)} disabled={!!editingItem}>
        <img src={EditIcon} height="15" alt="edit icon"/>
      </button>
    </li>
  );
}

export default UnicornItem;

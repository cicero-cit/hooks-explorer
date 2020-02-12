import React from 'react';

import './styles.css';

function UnicornItem({ unicorn }) {
  return (
    <li className="unicorn-item">
      <header>
        <div className="user-info">
          <strong>{unicorn.name}</strong>  
          <span>Age: {unicorn.age}</span>
        </div>              
      </header>
      <p>Color: {unicorn.colour}</p>
    </li>
  );
}

export default UnicornItem;

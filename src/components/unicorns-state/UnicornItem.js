import React from 'react';

import store from './../../store';
import TrashIcon from './../../assets/svg/trash.svg';
import EditIcon from './../../assets/svg/edit.svg';
import { deleteUnicorn, getAllUnicorn } from './../ActionsUnicorn';

class UnicornItem {
  handleDelete = (_id) => {
    store.dispatch(await deleteUnicorn(_id));
    store.dispatch(getAllUnicorn());
  }
  
  render(){
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
        <button onClick={() => handleClickId(unicorn._id)} disabled={!!editing._id}>
          <img src={EditIcon} height="15" alt="edit icon"/>
        </button>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  editing: state.ReducerUnicorn.item,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUnicorn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnicornItem);

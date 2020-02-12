import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  deleteUnicorn,
  getAllUnicorn,
  getByIdUnicorn,
  postUnicorn,
  putUnicorn
} from './ActionsUnicorn';

class UnicornView extends Component {
  async componentDidMount(){
    const { getAllUnicorn } = this.props;
    await getAllUnicorn();
    this.setState({
      list: this.props.list
    })
  }

  render(){
    const { list } = this.state;
    return (
      <div id="app">
        {/* <aside>
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
        </main> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.ReducerStateUnicorn.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUnicorn,
  getByIdUnicorn,
  postUnicorn,
  deleteUnicorn,
  putUnicorn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnicornView);

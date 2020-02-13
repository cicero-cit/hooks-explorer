import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from './../../store';
import {
  getAllUnicorn,
  getByIdUnicorn
} from './../ActionsUnicorn';
import UnicornItem from '../unicorns/UnicornItem';
import UnicornForm from './UnicornForm';

const INITIAL_STATE = {
  list: []
}

class UnicornView extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.loadUnicorns();
  }

  componentDidUpdate(prev){
    const { list } = this.props;

    if(prev.list !== list){
      this.setState({ list });
    }
  }

  loadUnicorns = async () => {
    const { getAllUnicorn } = this.props;
    store.dispatch(await getAllUnicorn());
    const { list } = this.props;
    this.setState({ list });
  }

  handleClickId = (id) => {
    const { list } = this.state;
    this.setState({ list: list.filter(item => item._id !== id) });
    store.dispatch(getByIdUnicorn(id));
  }

  render(){
    const { list } = this.state;
    return (
      <div id="app">
        <aside>
          <strong>New Guys</strong>
            <UnicornForm />
        </aside>
  
        <main>
          <ul>
            {list.map(unicorn => (
              <UnicornItem
                key={unicorn._id} 
                unicorn={unicorn} 
                handleClickId={this.handleClickId}
              />
            ))}
          </ul>
        </main> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.ReducerUnicorn.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUnicorn,
  getByIdUnicorn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnicornView);

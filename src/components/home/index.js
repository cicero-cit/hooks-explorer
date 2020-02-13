import React, { Component } from 'react';

export default class Home extends Component {
  render(){
    return (
      <div id="app">
        <aside style={{ width: '100%' }}>
          <strong>With hooks, or not?</strong>
            <form>
              <button type="submit" 
                onClick={ () => this.props.history.push('/with-hooks') }
              >
                Yeah, hooks is good
              </button>
              <button type="submit" 
                onClick={ () => this.props.history.push('/without-hooks') }
              >
                Noo, i hate them
              </button>
            </form>
        </aside>
      </div>
    );
  }
}

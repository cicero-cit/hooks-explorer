import React from 'react';
import { useSelector } from 'react-redux'

import UnicornView from './components/unicorns/UnicornView';

function App() {
  useSelector(state => console.log(state))
  return <UnicornView />;
}

export default App;

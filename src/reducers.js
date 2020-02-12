import { combineReducers } from 'redux';

import ReducerUnicorn from './components/unicorns/ReducerUnicorn';
import ReducerStateUnicorn from './components/unicorns-state/ReducerStateUnicorn';

export default combineReducers({ 
    ReducerUnicorn,
    ReducerStateUnicorn
});
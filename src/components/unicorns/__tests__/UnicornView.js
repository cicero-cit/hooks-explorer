import React from 'react'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import UnicornView from './../UnicornView';
import store from './../../../store';

jest.mock('../../ActionsUnicorn');
const actions = require('../../ActionsUnicorn');

const Mockedlist = [
  {
    _id: 1,
    name: 'Unicorn 1',
    age: 1,
    colour: 'Colour 1'
  },
  {
    _id: 2,
    name: 'Unicorn 2',
    age: 2,
    colour: 'Colour 2'
  },
  {
    _id: 3,
    name: 'Unicorn 3',
    age: 3,
    colour: 'Colour 3'
  },
  {
    _id: 4,
    name: 'Unicorn 4',
    age: 4,
    colour: 'Colour 4'
  },
  {
    _id: 5,
    name: 'Unicorn 5',
    age: 5,
    colour: 'Colour 5'
  },
];

describe("Unicorn view testing hooks", () => {
  
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <UnicornView />
      </Provider>
    );
  
    return {
      ...utils,
    }
  }

  it("[useEffect] = Get all and set list in reducer", async () => {
    store.dispatch({ type: 'GET_SUCCESS', data: Mockedlist });
    actions.getAllUnicorn.mockReturnValue(() => ({ type: 'GET_SUCCESS', data: Mockedlist }));

    setup();
    
    await expect(actions.getAllUnicorn.mock.calls.length).toBe(1);
    expect(store.getState().ReducerUnicorn.list.length).toBe(5);
  });
})
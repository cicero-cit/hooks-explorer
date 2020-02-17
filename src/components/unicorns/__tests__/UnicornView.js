import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import UnicornView from './../UnicornView';
import store from './../../../store';

jest.mock('../../ActionsUnicorn');
const actions = require('../../ActionsUnicorn');

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

  beforeEach(() => {
    store.dispatch({ type: 'RESET' })
  });

  it("[useState] = The form is initialized with empty values", () => {
    const { name, age, colour } = setup();
  
    expect(name.value).toBe("");
    expect(age.value).toBe("");
    expect(colour.value).toBe("");
  });

  it("[useState] = The form is updated with the guys data", () => {
    const { name, age, colour } = setup();
  
    fireEvent.change(name, { target: { value: 'Happunzell' } });
    fireEvent.change(age, { target: { value: 16 } });
    fireEvent.change(colour, { target: { value: 'Dark Purple' } });
  
    expect(name.value).toBe("Happunzell");
    expect(age.value).toBe("16");
    expect(colour.value).toBe("Dark Purple");
  });
  
  it("[useState] = Is not possible write letter to age field", () => {
    const { age } = setup();
  
    fireEvent.change(age, { target: { value: "Dracula" } });
  
    expect(age.value).toBe("");
  });

  it("[useEffect] = Should set in state, when theres data on redux", async () => {
    store.dispatch({ type: 'GET_BY_ID_SUCCESS', data: MockedUnicorn });
    const { item } = store.getState().ReducerUnicorn;

    const { name, age, colour } = setup();
    
    expect(name.value).toBe(item.name);
    expect(age.value).toBe(item.age.toString());
    expect(colour.value).toBe(item.colour);
  });

  it("On post unicorn", async () => {
    const { btnSubmit } = setup();

    actions.postUnicorn.mockReturnValue(() => Promise.resolve());
    actions.getAllUnicorn.mockReturnValue(() => Promise.resolve());

    fireEvent.click(btnSubmit);
    
    await expect(actions.postUnicorn.mock.calls.length).toBe(1);
    expect(actions.getAllUnicorn.mock.calls.length).toBe(1);
  });
})
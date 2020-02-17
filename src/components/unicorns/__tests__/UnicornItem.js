import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';

import UnicornItem from './../UnicornItem';
import store from './../../../store';

jest.mock('../../ActionsUnicorn');
const actions = require('../../ActionsUnicorn');

const MockedUnicorn = {
  _id: 1,
  name: "Walbert Bros",
  age: 71,
  colour: "Light Grey"
}

const handleClickId = () => store.dispatch({ type: 'GET_BY_ID_SUCCESS', data: MockedUnicorn });

describe("Unicorn item testing hooks", () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <UnicornItem unicorn={MockedUnicorn} handleClickId={handleClickId}/>
      </Provider>
    );
  
    const name = utils.getByTestId("form-unicorn-name");
    const age = utils.getByTestId("form-unicorn-age");
    const colour = utils.getByTestId("form-unicorn-colour");
    const btnEdit = utils.getByTestId("form-unicorn-btn-edit");
    const btnDelete = utils.getByTestId("form-unicorn-btn-delete");
  
    return {
      name,
      age,
      colour,
      btnEdit,
      btnDelete,
      ...utils,
    }
  }

  it("[useState] = The item data is never empty", () => {
    const { name, age, colour } = setup();
  
    expect(name.value).not.toBe("");
    expect(age.value).not.toBe("");
    expect(colour.value).not.toBe("");
  });
  
  it("[useSelect] = Disable edit on click to edit", () => {
    const { btnEdit } = setup();
  
    fireEvent.click(btnEdit);

    expect(btnEdit).toHaveAttribute('disabled');
  });
  
  it("[useState] = On click delete", async () => {
    const { btnDelete } = setup();

    actions.deleteUnicorn.mockReturnValue(() => Promise.resolve());
    actions.getAllUnicorn.mockReturnValue(() => Promise.resolve());

    fireEvent.click(btnDelete);

    await expect(actions.deleteUnicorn.mock.calls.length).toBe(1);
    expect(actions.getAllUnicorn.mock.calls.length).toBe(1);
  });

})
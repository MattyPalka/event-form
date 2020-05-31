import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer'
import db from '../database/db'



const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer)

describe('Test render', () => {
  test('renders without errors', () => {
    const { getByText } = render(<Provider store={theStore}><App /></ Provider>);
    const headingElement = getByText("Submit Application for Event");
    expect(headingElement).toBeInTheDocument();
  });
})


describe('Test database', () => {
  test('should insert a doc into collection', async () => {
    const mockFormSubmission = await db.dbCreate('form-mock', {
      name: 'Adam', surname: 'Smith', email: 'adamsmith@mail.com', date: '2020-01-01'
    })
    expect(mockFormSubmission.result.ok).toEqual(1)
  })

  test('should read single doc from collection', async () => {
    const mockDbRead = await db.dbFindOne('form-mock', { email: 'adamsmith@mail.com' })
    expect(mockDbRead.email).toEqual('adamsmith@mail.com')
  })

  test('should read all docs from collection', async () => {
    const mockDbRead = await db.dbFind('form-mock', {})
    expect(mockDbRead).toBeTruthy()
  })

  test('should not find non-existing doc', async () => {
    const mockDbRead = await db.dbFind('form-mock', { nonExistingKey: 'non-existing-value' })
    expect(mockDbRead).toEqual([])
  })
})



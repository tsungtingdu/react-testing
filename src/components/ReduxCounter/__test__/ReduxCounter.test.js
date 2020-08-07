import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { initialState, reducer } from './../../../store/reducer'
import ReduxCounter from './../ReduxCounter.js'

const renderWithRedux = (
  component, { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

afterEach(cleanup)

it('check initial state is equal to 0', () => {
  const { getByTestId } = renderWithRedux(<ReduxCounter />)
  expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increments the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<ReduxCounter />,
    {
      initialState: { count: 5 }
    })
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('6')
})

it('decrements the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<ReduxCounter />, {
    initialState: { count: 100 },
  })
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('99')
})
import React from 'react'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react'
import Counter from './../Counter'

afterEach(cleanup)

// snapshot
it('should take a snapshot', () => {
  const { asFragment } = render(<Counter />)
  expect(asFragment(<Counter />)).toMatchSnapshot()
})

// DOM element
it('should equal to 0', () => {
  const { getByTestId } = render(<Counter />)
  expect(getByTestId('counter')).toHaveTextContent(0)
});

it('should be enabled', () => {
  const { getByTestId } = render(<Counter />)
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled')
})

// DOM event
it('increments counter', () => {
  const { getByTestId } = render(<Counter />)
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent(1)
})

it('decrements counter', () => {
  const { getByTestId } = render(<Counter />)
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent(-1)
})

// DOM Async Event
it('increments counter after 1s', async () => {
  const { getByTestId, getByText } = render(<Counter />)
  fireEvent.click(getByTestId('button-delay'))
  const counter = await waitForElement(() => getByText('1'))
  expect(counter).toHaveTextContent('1')
})
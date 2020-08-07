import React from 'react'
import { connect } from 'react-redux'

const ReduxCounter = ({ counter, dispatch }) => {

  const increment = () => dispatch({ type: 'INCREMENT' })
  const decrement = () => dispatch({ type: 'DECREMENT' })

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={increment}>Up (Redux)</button>
      <button data-testid="button-down" onClick={decrement}>Down (Redux)</button>
    </>
  )
}

export default connect(state => ({ counter: state.count }))(ReduxCounter)
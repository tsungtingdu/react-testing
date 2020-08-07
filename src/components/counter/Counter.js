import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const delayCount = () => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 1000)
  }

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
      <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
      <button data-testid="button-delay" onClick={delayCount}>Down</button>
    </>
  )
}

export default Counter
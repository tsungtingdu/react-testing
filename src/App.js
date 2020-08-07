import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/Button'
import Counter from './components/counter/Counter'
import ReduxCounter from './components/ReduxCounter/ReduxCounter'

// using Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './store/reducer'

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button label="click me please" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Provider store={store}>
          <ReduxCounter />
        </Provider>
      </header>
    </div>
  );
}

export default App;

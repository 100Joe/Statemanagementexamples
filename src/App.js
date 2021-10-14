import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { CounterButton } from './CounterButton';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <h1>State Management Example</h1>
      <CounterButton />
    </Provider>
  );
}

export default App;

import ComponentA from './Components/CompoA'
import ComponentB from './Components/CompoB'
import ComponentC from './Components/CompoC'
import React, { useReducer } from 'react';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const GlobalApp = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <CountContext.Provider value ={{ countState: count, countDispatch: dispatch }}>
      <div>
        <h1>Count :- {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  )
}

export default GlobalApp
import React , { useReducer , createContext, useState} from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';
export const AppContext = createContext();

const initialState = {
  data: ''
};
function reducer(state, action) {
  switch (action.type) {
      case 'CHANGE_DATA':
          return {
            data: action.data
          };

      default:
          return initialState;
  }
}

function Parent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data} =state;
  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <header className="App-header">
      <h1>I am the Parent</h1>
      </header>
      <div >
      <Child/>
      <Child2 data={data}/>
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default Parent;
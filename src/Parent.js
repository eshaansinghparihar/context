import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Child';

function Parent() {
const [data,setdata]=useState('');
function changeHandler(event){
    setdata(event.target.value);
}
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am the Parent</h1>
        <input placeholder="Enter something to be reflected in Child Component"
        onChange={changeHandler}
        value={data}/>
      </header>
      <Child data={data}/>
    </div>
  );
}

export default Parent;
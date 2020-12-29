import './App.css';
import React , {useState, useEffect,useContext} from 'react';
import { AppContext } from './Parent';

function Child(){
    const [data,setdata]=useState('');
    const {state, dispatch} = useContext(AppContext);
    function changeHandler(event){
        setdata(event.target.value);
        dispatch({ type: 'CHANGE_DATA', data: event.target.value});
    }
return (
    <div className="App">
    <header className="Child1-header">
        <h1>I am the First Child</h1>
        <input placeholder="Enter something to be reflected in Parent Component"
        onChange={changeHandler}
        value={data}/>
          </header>
        </div>
    
);
}

export default Child;
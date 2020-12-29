import './App.css';
import React , {useState, useEffect,useContext} from 'react';
import { AppContext } from './Parent';

function Child2({data}){
    return (
        <div className="App">
          <header className="Child2-header">
          <h1>I am the Second Child</h1>
          {(data===''?(<h1>No Data Has Been Passed Yet</h1>):(<h1>{data}</h1>))}
          </header>
        </div>
      );

}
export default Child2;
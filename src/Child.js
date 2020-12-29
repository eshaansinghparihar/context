import './App.css';
import { useState } from 'react';

const Child=({data})=> {
console.log(data)
if(data === '')
return (
    <div>
        <h1>I am the Child</h1>
        <h1>No Data Has Been Passed Yet.</h1>
    </div>
    
);
else
return (
    <div>
        <h1>I am the Child</h1>
        <h1>{data}</h1>
    </div>

  );
}

export default Child;
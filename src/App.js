import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  let [curValue, chngValue] = useState(1);
  let [string, chngstring] = useState('working');

  const controller = () => {
    if(curValue === 1){
      chngstring(string = "hello");
    }

    if(curValue === 2){
      chngstring(string = "andulag");
    }

    if(curValue === 3){
      chngstring(string = "dami");
    }

    if(curValue === 4){
      chngstring(string = "tobi");
    }
}

useEffect(() => {
  const interval = setInterval(() => {
    controller();
  }, 100);
  return () => clearInterval(interval);
}, [curValue, string]);




  return (
    <div className="App">
      <header className="App-header"> 
          <ul>
              <li onClick={() => chngValue(curValue = 2)} >lol</li>
              <li onClick={() => chngValue(curValue = 3)}>tobi</li>
              <li onClick={() => chngValue(curValue = 4)}>hey</li>
          </ul>
      </header>
      <body className = "App-body">
      <p>
            {string}
      </p>
      </body>
    </div>
  );
}





 export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  let [curValue, chngValue] = useState(1);
  let [string, chngstring] = useState('working');

  const controller = () => {
    if(curValue === 1){
      chngstring(string = "About Me");
    }

    if(curValue === 2){
      chngstring(string = "Education");
    }

    if(curValue === 3){
      chngstring(string = "Work");
    }

    if(curValue === 4){
      chngstring(string = "Projects");
    }
    if(curValue === 5){
      chngstring(string = "More");
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
          <div><h3>Anurag Bisht</h3></div>
          <div> 
            <ul>
                <li onClick={() => chngValue(curValue = 1)}>About Me </li>
                <li onClick={() => chngValue(curValue = 2)}>Education</li>
                <li onClick={() => chngValue(curValue = 3)}>Work</li>
                <li onClick={() => chngValue(curValue = 4)}>Projects</li>
                <li onClick={() => chngValue(curValue = 5)}>More</li>
            </ul>
          </div>
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

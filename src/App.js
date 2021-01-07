import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  let [curValue, chngValue] = useState(1);
  let [string, chngstring] = useState('');

  if(curValue == 1){
    chngstring(string = "hello");
  }

  if(curValue == 2){
    chngstring(string = "andulag");
  }




  return (
    <div className="App">
      <header className="App-header"> 
          <ul>

          </ul>
      </header>
      <body className = "App-body">
      <p>
            
      </p>
      </body>
    </div>
  );
}





 export default App;

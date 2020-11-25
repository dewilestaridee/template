import React, {Component} from 'react';
import './App.css';
import Main from './Main.js';
import CV from './CV.js';

class App extends Component {
  render (){
    return (
      <div className = "utama">
        <div className="app">
           PORTFOLIO
        </div>
          <CV />
          <Main/>
      </div>
    );
  }

}

export default App;

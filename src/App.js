import React, {Component} from 'react';
import './App.css';
import Main from './Main.js';
import CV from './CV.js';
import Banner from './Banner.js';

class App extends Component {
  render (){
    return (
      <div className = "utama">
        <div className="app">
           PORTFOLIO
        </div>
          <CV />
          <Banner />
          <Main/>
      </div>
    );
  }

}

export default App;

import React, {Component} from 'react';
import './App.css';
import Main from './Main.js';
import Cv from './CV.js';
import Banner from './Banner.js';
import Foto from './Foto.js';
import Certificate from './Certificate.js';
import Corel from './Corel.js';


class App extends Component {
  render (){
    return (
      <div className = "utama">
        <div className="app">
           PORTFOLIO
        </div>
          <CV />
          <Certificate />
          <Banner />
          <Foto />
          <Main/>
          <Corel />
          
      </div>
    );
  }

}

export default App;

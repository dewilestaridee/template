import React, {Component} from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Movie from './Movie.js';

class App extends Component {
  render (){
    return (
      <div className = "utama">
        <div className="app">
           PORTFOLIO
        </div>
        <div>
          <Header />
         <Movie />
          <Main/>
        </div>
      </div>
    );
  }

}

export default App;

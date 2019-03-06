import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
//import CharacterData from './components/CharacterData'
import AbstractCharacter from './components/AbstractCharacter'
import DetailCharacter from './components/DetailCharacter'
//import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename = { process.env.PUBLIC_URL } >
        <div className="App">
          <Header/>
          <Route exact path = '/' component = { AbstractCharacter}/>
          <Route exact path = '/character' component = { DetailCharacter}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

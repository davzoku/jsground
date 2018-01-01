import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      //use className cos JSX
      <div className="App">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;

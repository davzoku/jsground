import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // use className cos JSX
      <div className="App">
        <Header />
        {/* manually set up routing :(, commenting in jsx is a chore */}
          <Route exact={true} path = "/" component={Home} />
          <Route path="/faq" component={Faq} />
        <Footer />
      </div>
    );
  }
}

export default App;

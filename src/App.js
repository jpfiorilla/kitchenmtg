import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import PeopleContainer from './components/PeopleContainer';
import HomePageContainer from './components/HomePage/HomePageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>KitchenMTG</h2>
        </div>
        <HomePageContainer />
      </div>
    );
  }
}

export default App;

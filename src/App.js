import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './components/HomePage/HomePageContainer';
import ReactLogState from 'react-log-state';

ReactLogState.logAll()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="insideHeader">
            <h2>KitchenMTG</h2> 
          </div>
        </div>
        <HomePageContainer />
      </div>
    );
  }
}

export default App;

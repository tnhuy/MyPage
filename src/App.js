import React, { Component } from 'react';
import './css/App.css';
import Header from './js/components/header';
import YouTube from './js/components/youTube';
import AppNav from './js/components/appNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppNav />
        <div className="App-main-body">
          <div className="container">
            <div class="row">
              <div class="col s6"><YouTube video="nZVaxSL2VnA" /></div>
              <div class="col s6">This div is 6-columns wide</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

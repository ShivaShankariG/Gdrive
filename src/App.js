import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MainPage/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

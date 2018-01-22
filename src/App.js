import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopMenu from './TopMenu.js';


import MenuExampleNested from './MenuExampleNested';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TopMenu/>
          <MainPage/>
         
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

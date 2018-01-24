import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopMenu from './TopMenu.js';


 

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="App">
        
        <AppBar/>
       </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

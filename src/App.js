import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopMenu from './TopMenu.js';
import MyMenu from './MyMenu';
import Menu from 'material-ui/Menu/Menu';
import MyDriveList from './MyDriveList';
import Toggle from 'material-ui/Toggle';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="App" style={{postion: 'absolute', zIndex: 0}}>
      
        <AppBar style= {{position: 'absolute'}}/>
        
        <style>{'body { background-color: #EEEEEE; }'}</style>
       
        <MyDriveList/>
        <Toggle/>
       </div>
       
      </MuiThemeProvider>
    );
  }
}

export default App;

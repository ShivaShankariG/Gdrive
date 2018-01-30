import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopMenu from './TopMenu.js';
import MyMenu from './MyMenu';
import Menu from 'material-ui/Menu/Menu';
import MyDriveList from './MyDriveList';
import Toggle from 'material-ui/Toggle';
export const test = 'true';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {color: "#FF5722" };
   
  }
  componentWillMount(){
    alert("Before mounting:");
  }
  componentDidMount()
  {
    alert("mounted now");
  }
  handleToggle=()=>
  {
    this.setState({color: '#fff'})
  }
  render() {

    return (
      <MuiThemeProvider >
        <div className="App" style={{postion: 'absolute', zIndex: 0}}>
      
        <AppBar style= {{position: 'absolute'}} color= {this.state.color}/>
        
        <style>{'body { background-color: #EEEEEE; }'}</style>
       
        
        <Toggle onToggle={this.handleToggle}/>
       </div>
       
      </MuiThemeProvider>
    );
  }
}

export default App;

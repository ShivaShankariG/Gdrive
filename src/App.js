import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themee: '#FF5722' ,
    };
    this.handleToggle=this.handleToggle.bind(this);
   
  }
  handleToggle()
  {
    if(this.state.themee==='#fff')
      this.setState({themee: '#FF5722'});
    else
    this.setState({themee: '#fff'});
   }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
        <Route exact path="/" component={Home} />

        
       </Router>
      </MuiThemeProvider>
    );
  }
}
const Home = () => (
<div>
          <div className="App" style={{postion: 'absolute', zIndex: 0}}>
            <AppBar themee= '#FF5722'/>
          </div>
        </div>);
export default App;


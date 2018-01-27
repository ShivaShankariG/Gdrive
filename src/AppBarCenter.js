import React from 'react';
import SearchSVGIcon from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import DetailsIcon from 'material-ui/svg-icons/image/details';
import MyMenu from './MyMenu';
import TopMenu from './TopMenu'
import DialogExampleSimple from './DialogExampleSimple';
const styles = {
    customWidth: {
      width: 500
    },
    Container:
    {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-around',
       alignItems: 'flex-start',
        marginLeft: 20,

    }
  };

  
const appList = [
    'PDFs',
    'Text documents',
    'Spreadsheets',
    'Presentations',
    'Photos & Images',
    'Videos'
  ];

  const iconStyles = {
    marginRight: 20,
    marginTop: 23
  };
  
  const searchIconStyles = {
    marginRight: 20,
    marginTop: 14,
    marginLeft: 8
  };
export default class AppBarCenter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: 1,showComponent: false};
        this.handler = this.handler.bind(this)
      }
    
      state = {
        searchText: '',
      };
      handleClick=() =>
      {
        this.setState({
            showComponent: ! this.state.showComponent,
          });
      }
      handleUpdateInput = (searchText) => {
        this.setState({
          searchText: searchText,
        });
      };

    
      handleNewRequest = () => {
        this.setState({
          searchText: '',
        });
      };
      handler(e) {
        e.preventDefault()
        this.setState({
            showComponent: false
        })
      };
    
     
    render(){
        return (
            <div style={styles.Container}>
           
       
          <TopMenu/>
          <br/>
        
           <DialogExampleSimple/>
            </div>
        );
    }
}
import React from 'react';
import SearchSVGIcon from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import DetailsIcon from 'material-ui/svg-icons/image/details';
import MyMenu from './MyMenu';


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
    
     
    render(){
        return (
            <div style={styles.Container}>
           
            <div className="TopMenu">
            <SearchSVGIcon style={searchIconStyles} />
            <AutoComplete className="AutoComplete"
              width={styles.customWidth.width}
              hintText="Search Drive"
              searchText={this.state.searchText}
              onUpdateInput={this.handleUpdateInput}
              onNewRequest={this.handleNewRequest}
              dataSource={appList}
              filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
              openOnFocus={true}
              underlineShow={false}
            />
          </div>
          <br/>
          <FlatButton className= "dropbutton"
                        label="My drive"
                        labelPosition="before"
                        primary={true}
                        icon={<DetailsIcon  color = '#21212'/>}
                        onClick={this.handleClick} 
            />
            
           
            {this.state.showComponent?  <MyMenu />: null}  
            </div>
        );
    }
}
import React from 'react';
import ListIcon from 'material-ui/svg-icons/action/list';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FolderIcon from 'material-ui/svg-icons/file/folder'; 
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import GridIcon from 'material-ui/svg-icons/image/grid-on'; 
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import profPic from './images/twitter-person-image.png';

const styles = {


    Left:{
        display: 'flex',
        flexFlow: 'row wrap',
        AlignContent: 'stretch',
        ALignItems: 'baseline',
        width: 190,
        marginLeft: 600
    },


}
class MYlist extends React.Component{
    render()
    {
      
        return(
            <Paper >
            <Menu className="menu">
                <MenuItem primaryText="settings"/>
                <MenuItem primaryText="Download Backup and Sync for Windows"/>
                <MenuItem primaryText="Keyboard shortcuts"/>
                <MenuItem primaryText="Help"/>
                </Menu>
                </Paper>
        );
    }
}
export default class AppBarRight extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {open: false,
                     show:false,
                     change:true};
        this.handleClick=this.handleClick.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
        this.handleChange=this.handleChange.bind(this);

      }
    
      handleToggle = () => this.setState({open: !this.state.open});
      handleChange=()=>this.setState({change: !this.state.change});
      handleClick =()=> this.setState({show: !this.state.show})
    render()
    {
        return (
            <div style={styles.Left} className="iconColor">
                    <IconButton tooltip="Grid View" tooltipPosition="bottom-center"  >
                        <GridIcon color= '#757575'/>
                    </IconButton>

                    <IconButton tooltip="Grid View" tooltipPosition="bottom-center" >
                        <NotificationIcon color= '#757575'/>
                    </IconButton>

                    <IconButton >
                    <Avatar className="profilePic" src={profPic} alt="profPic" round="true" onClick={this.handleLogoClick} />
                    </IconButton>
                    
                    {this.state.change ? <IconButton tooltip="Grid View" tooltipPosition="bottom-center" onClick={this.handleChange}>
                        <GridIcon color= '#757575'/>
                    </IconButton>
                    :
                     <IconButton tooltip="List View"  tooltipPosition="bottom-center" onClick={this.handleChange}  >
                     <ListIcon color= '#757575'/>
                 </IconButton>
                 }
                    
                   
                    <IconButton tooltip="View details"  tooltipPosition="bottom-center" onClick ={this.handleToggle}  >
                        <InfoIcon color= '#757575' />
                    </IconButton>
                    <IconButton tooltip="Settings"  tooltipPosition="bottom-center">
                        <SettingsIcon onClick={this.handleClick}  color= '#757575'/>
                    </IconButton>
                    <Drawer width={250} openSecondary={true} open={this.state.open} containerStyle={{ top: 144}} >
                         <AppBar   title="My Drive" 
                                    
                                    iconElementLeft={<IconButton>
                                                        <FolderIcon color= '#616161'/>
                                                    </IconButton> } 
                                    iconElementRight={<IconButton onClick={this.handleToggle}>
                                                        <CloseIcon color= '#616161'/>
                                                    </IconButton>} /> 
                    </Drawer>
                    {this.state.show? <MYlist/>: null}
             </div>
        );    }
}
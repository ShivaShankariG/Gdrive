import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import CFolderIcon from 'material-ui/svg-icons/file/create-new-folder'; 
import UFileIcon from 'material-ui/svg-icons/file/file-upload'; 
import FolderIcon from 'material-ui/svg-icons/file/folder'; 
import GdocsIcon from './images/GDocs.png';
import GSheetsIcon from './images/Sheets-icon.png';
import GSlidesIcon from './images/GSlides.png';
import PlusIcon from './images/plus-icon.png';
import GdrIcon from './images/Gdrawings.png';
import GFIcon from './images/GForms.png';
import GMIcon from './images/GMaps.png';
import GSIcon from './images/GSites2016.png';
import driveLogo from './images/Hasura_Drive_image.png';
import FlatButton from 'material-ui/FlatButton';
import {Dialog, TextField} from 'material-ui';
import index from 'material-ui/Dialog';


export default class MyMenu extends React.Component
{
  //==================

  constructor(props) {
    super(props);
    this.state = {open: false,
                 show:false,
                 change:true,
                 showUpload:false,
                 filePathnName: ''
                };
    this.handleUpload=this.handleUpload.bind(this);
    this.handleToggle=this.handleToggle.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }
  handleUpload = () => {

    
    //checkLogin(cred);
    //setErrorText(undefined);
  };
  handleToggle = () => this.setState({open: !this.state.open});
  handleChange=()=>this.setState({change: !this.state.change});
  handleClick =()=> this.setState({show: !this.state.show});


  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({showUpload: true});
  };

  handleClose = () => { 
    this.setState({showUpload: false});
  };

  handleErrorInputChange = (e) => {
    if (e.target.id === 'filePathnName') {
      var fileDetails = e.target.value;

      this.setState({
        filePathnName: fileDetails
      });
      /*this.setState({
        //name: name,
        errorTextName: e.target.value ? '' : 'Please, type your Name'
      });*/
    };
  }; 
  


  //=======================

  render()
  {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Upload"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    /* needs an eventlistener that will call {this.props.action}, a funcyion defined in line 28 of AppBarLeft and line 73 of
     AppBarRight wich changes the state of showComponent to false */

    if(this.props.id=="1"){
      return(
      <div >
        <Paper style={{position: 'absolute', zIndex : 0}}>
          <Menu desktop={true} width={320} className="menu" >
            <MenuItem primaryText="New Folder.."  leftIcon={<CFolderIcon/>} />
            <Divider /> 
            <MenuItem primaryText="Upload Files.." leftIcon={<UFileIcon/>} onClick={this.handleOpen} />
              <Dialog
              actions={actions}
              modal={true}
              open={this.state.showUpload}
              contentStyle={{width: 450, height: 600}}
              >
                  <img className="driveLogo" src={driveLogo} alt="driveLogo" />
                  <br />
                  <br />
                  <strong>Upload File</strong><br />
                  Choose file to upload to Drive
                  <br />
                  <br />
                  <TextField
                      id="filePathnName"
                      hintText="choose file to upload"
                      floatingLabelText="choose file to upload"
                      errorText="choose file to upload"
                      onChange={this.handleUpload}
                  /><br />                  
              </Dialog>
            <MenuItem primaryText="Upload Folder" leftIcon={<FolderIcon/>} />
            <Divider />
            <MenuItem
              primaryText="Google Docs"
              leftIcon={<img src={GdocsIcon} alt="googleDocs" />}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Blank document"/>,
                <MenuItem primaryText="Form a template"/>,
                ]}
            />
            <MenuItem
              primaryText="Google Sheets"
              leftIcon={<img src={GSheetsIcon} alt="gSheets" />}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Blank spread sheet"/>,
                <MenuItem primaryText="Form a template"/>,
              ]}
            />
            <MenuItem
              primaryText="Google Slides"
              leftIcon={<img src={GSlidesIcon} alt="googleSheets" />}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="Blank presentation"/>,
                <MenuItem primaryText="Form a template"/>,
                  ]}
            />
            <MenuItem
              primaryText="More"
              leftIcon={<p></p>}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem
                  primaryText="Google Forms"
                  leftIcon={<img src={GFIcon} alt="Forms" />}
                  rightIcon={<ArrowDropRight />}
                  menuItems={[
                    <MenuItem primaryText="Blank form"/>,
                    <MenuItem primaryText="Form a template"/>,
                    ]}
                  />,
                  <MenuItem primaryText="Google Drawings"  leftIcon={<img src={GdrIcon} color= '#616161'  alt="Dra" />}/>,
                  <MenuItem primaryText="Google My Maps"  leftIcon={<img src={GMIcon} color= '#616161'  alt="Maps" />}/>,
                  <MenuItem primaryText="Google Sites"  leftIcon={<img src={GSIcon} color= '#616161'  alt="Sites" />}/>,
                  <Divider/>,
                  <MenuItem primaryText="Connect More Apps"  leftIcon={<img src={PlusIcon} color= '#616161'  alt="pLus" />}/>
                ]}
                />
          </Menu>
        </Paper>
      </div>
    );
    }
    else
    {
      return(
        <div style={{position: 'absolute', marginTop: 132, zIndex: -2,}}>
         
            <Menu  className="menu">
            <MenuItem primaryText="MyDrive"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Computers"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Shared with me"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Recent"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Google Photos"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Starred"  leftIcon={<CFolderIcon/>}/>
            <MenuItem primaryText="Trash"  leftIcon={<CFolderIcon/>}/>
            <Divider/>
            <MenuItem primaryText="Backups"  leftIcon={<CFolderIcon/>}/>
            <Divider/>
            <MenuItem primaryText="Upgrade Storage"  leftIcon={<CFolderIcon/>}/>

            </Menu>
          
        </div>
      );
    }
  }
}

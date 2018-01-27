import React from 'react';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CFolderIcon from 'material-ui/svg-icons/file/create-new-folder'; 

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          contentStyle={{width: 450, height: 1000}}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
         <Menu  className="menu">
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
        </Dialog>
      </div>
    );
  }
}
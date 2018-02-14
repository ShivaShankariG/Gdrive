import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CFolderIcon from 'material-ui/svg-icons/file/create-new-folder'; 
import UFileIcon from 'material-ui/svg-icons/file/file-upload'; 
import FolderIcon from 'material-ui/svg-icons/file/folder'; 
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class leftMenu extends React.Component
{
    constructor(props)
    {
        super(props);
        alert("Constructor");
    }
    render()
    {
        alert("rendering leftMenu?");
        return (
         <div >
         
         <List width={250} className="menu" >
        
            <ListItem
            primaryText="My Drive"
            leftIcon={<CFolderIcon />}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="F1"
                leftIcon={<CFolderIcon />}
              />,
              <ListItem
                key={2}
                primaryText="F2"
                leftIcon={<CFolderIcon />}
                
                
              />,
            
            ]}
          />,
           
       
         <MenuItem primaryText="Computers" leftIcon={<UFileIcon/>} onClick={this.handleOpen} />
          
         <MenuItem primaryText="Shared with me" leftIcon={<FolderIcon/>} />
        
         <MenuItem primaryText="Recent" leftIcon={<FolderIcon/>} />
         <MenuItem primaryText="Google Photos" leftIcon={<FolderIcon/>} />
         <MenuItem primaryText="Starred" leftIcon={<FolderIcon/>} />
         <MenuItem primaryText="Trash" leftIcon={<FolderIcon/>} />
         <Divider/>
         <MenuItem primaryText="Backups" leftIcon={<FolderIcon/>} />
         <Divider/>
         <MenuItem primaryText="Upgrade storage" leftIcon={<FolderIcon/>} />

       </List>

    
      </div>
        );
    }
}
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
const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
  marginTop: 40,
  marginLeft: -130,
  position: 'absolute',
};

const MenuExampleNested = () => (
  <div>
    <Paper style={style}>
      <Menu desktop={true} width={320} className="menu">
        <MenuItem primaryText="New Folder.."  leftIcon={<CFolderIcon/>}/>
        <Divider />

        <MenuItem primaryText="Upliad Files.." leftIcon={<UFileIcon/>} />
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
            
         
      </Menu>
    </Paper>
  </div>
);

export default MenuExampleNested;

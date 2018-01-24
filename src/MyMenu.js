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



const MyMenu = () => (
  <div>
    <Paper style={{position: 'absolute'}}>
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

export default MyMenu;

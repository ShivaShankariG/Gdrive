import React from 'react';
import AppBar from 'material-ui/AppBar';

import NavBar from './NavBar';
import AppBarRight from './AppBarRight';
export default  class MainPage extends React.Component
{
    render()
    {
        return(
    <AppBar showMenuIconButton={false} className="navbar" zDepth={3} 
    title={<NavBar/> } iconElementRight={<AppBarRight/>}/>
        );
    }
}
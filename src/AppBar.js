import React from 'react';
import Paper from 'material-ui/Paper';
import AppBarLeft from './AppBarLeft';
import AppBarCenter from './AppBarCenter';
import AppBarRight from './AppBarRight';
import {deepOrange400, grey50} from 'material-ui/styles/colors';

const styles = {

  //  justifyContent: 'space-between',



  };

export default  class AppBar extends React.Component
{

    render()
    {
       
        return(
            <div >
            <Paper style={{
                            height: 130,
                            width: '100%',
                            position: 'fixed',
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            backgroundColor : this.props.themee,}} 
                    zDepth={3}  >
                                    
                <AppBarLeft/>
                <AppBarCenter/>
                <AppBarRight/>
               
            </Paper>
             
           </div>
        );
    }
}

import React from 'react';
import Paper from 'material-ui/Paper';
import AppBarLeft from './AppBarLeft';
import AppBarCenter from './AppBarCenter';
import AppBarRight from './AppBarRight';
import MyDriveList from './MyDriveList';

export default  class AppBar extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            RenderList1: false,
            dummy: false,
        }
      this.handleRenderList1=this.handleRenderList1.bind(this);
      this.handleVanishList1=this.handleVanishList1.bind(this);
    }
    handleRenderList1()
    {
    this.setState({RenderList1: true})
    }
    handleVanishList1()
    {
        this.setState({RenderList1: false})
    }
    rerendering()
    {
        alert("came here too..");
        this.setState({dummy: true});
    }
    render()
    { alert("AppBar getting rendered");
    
       
        return(
           
            <div style={{diplay:'flex', overflowY:'hidden'}}>
            <Paper style={{
                            height: 130,
                            width: '100%',
                            position: 'fixed',
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            justifyContent:  'space-between',
                            backgroundColor : this.props.themee,}} 
                    zDepth={3}  >
                                    
                <AppBarLeft update ={this.rerendering}/>
                <AppBarCenter/>
                <AppBarRight render={this.handleRenderList1} vanish={this.handleVanishList1}/>
               
               
            </Paper>
             
          
          {this.state.RenderList1 ? <MyDriveList/> :null}
           </div>
        );
        
    }
}
//{this.state.RenderList1 ?this.props.handler:null }
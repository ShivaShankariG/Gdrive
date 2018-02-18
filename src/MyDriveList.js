import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FileIcon from './images/GDocs.png'; 
import FolderIcon from './images/folder.png';
import {getLoggedInUser,setLoggedInUser,downloadFile,getDetailsofFolders,getDetailsofFiles,getPromiseOfUploadFile,getPromiseOfFolderInfoUpdate} from './login';
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles= {
  position: 'absolute',
  height: 600,
  marginTop: 150,
  marginLeft: 200,
  width: '70%',
  overflow: 'auto',
  zIndex: -1,
}

export default class MyDriveList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      TData: [{}],
     }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSelection=this.handleSelection.bind(this);
    this.loadTable = this.loadTable.bind(this);
  }
  loadTable(pathid)
  {
    var data = {
      hvfldrid: pathid
      } 
      var arrayFiles =  [{}];
      var arrayMix = [{}];
       getDetailsofFolders(data).then( (tableData) => {arrayFiles = tableData[0];
       getDetailsofFiles(data).then( (fileData) => {
        var file=fileData[0];
        arrayMix = arrayFiles.concat(file);
     
        this.setState({ TData: arrayMix} ); 
        console.log("set state called");
       
       })
      } )
      return
  }
 handleSelection(selectedRow){
    const TData = this.state.TData;
    /*var file_id="";
    file_id=TData[selectedRow]["file_id"] ;
    console.log(file_id);
     if(!file_id)
     {
       var fldrid= TData[selectedRow]["path_id"] ;
       if(fldrid){
        this.loadTable(fldrid);
       }
     }
     var file_name=TData[selectedRow]["file_name"] ;
     var auth_token=getLoggedInUser().token;
     console.log("auth_token is "+auth_token);
     console.log("file_id is "+file_id)
     downloadFile(file_id,file_name,auth_token);*/

    if(TData[selectedRow]["path_id"])
     {
       this.loadTable(TData[selectedRow]["path_id"]);
     }
     else
     {
       downloadFile(TData[selectedRow]["file_id"],TData[selectedRow]["file_name"],getLoggedInUser().token );
     }
     

 }
 
 
 componentDidMount() {
   
  this.loadTable(getLoggedInUser().rtpthid);
      
  }
 
componentWillReceiveProps(nextProps)
{
 if(nextProps.props!==this.props.props)
 {
  this.loadTable(getLoggedInUser().rtpthid);
}
}

  render(){
   

   var TData=this.state.TData;
   console.log("length of Tdata: "+TData.length);
    var uName=getLoggedInUser().userName;
    if(TData){
    return (
     
    <div>
       <Paper style= {styles} >
        <Table selectable = {true} onRowSelection={this.handleSelection}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow selectable={true} onCellClick={this.thefn}>
            <TableHeaderColumn > </TableHeaderColumn>
                <TableHeaderColumn >Name</TableHeaderColumn>
                <TableHeaderColumn>Owner</TableHeaderColumn>
                <TableHeaderColumn>Last modified by me</TableHeaderColumn>
                <TableHeaderColumn>Size</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false} deselectOnClickaway={false}>
                  {this.state.TData.map( (row, index) => (
                    <TableRow  key={index} >
                      <TableRowColumn>{row.path_nm ?<img src={FolderIcon} alt="folder" height='20' width='30'/>: <img src={FileIcon} alt="folder" height='20' width='30'/>}</TableRowColumn>
                      <TableRowColumn>{row.path_nm ?row.path_nm : row.file_name}</TableRowColumn>
                      <TableRowColumn>{uName}</TableRowColumn>
                      <TableRowColumn>{row.modified_at}</TableRowColumn>
                      <TableRowColumn>{row.file_name? row.file_size: '-'}</TableRowColumn>
          </TableRow>
                    ))}
            </TableBody>
        </Table>
        </Paper>
      </div>
  );
}


  }
}


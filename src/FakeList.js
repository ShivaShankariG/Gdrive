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
import FakeList from './MyDriveList';

const styles= {
  position: 'absolute',
  height: 600,
  marginTop: 150,
  marginLeft: 200,
  width: '70%',
  overflow: 'auto',
  zIndex: -1,
}

export default class FakeList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hvName: this.props.hvName,
      hvPwd: this.props.hvPwd,
      TData: [{}],
      success: false,
      redirect: false,
     }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSelection=this.handleSelection.bind(this);

  }
  
 handleSelection(selectedRow){
  const TData = this.state.TData;
     var file_id="";
     file_id=TData[selectedRow]["file_id"] ;
     if(!file_id)
     {
       var fldrid= TData[selectedRow]["path_id"] ;
       if(fldrid){
         var data = {
          hvfldrid: fldrid
          } 
         var arrayFiles =  [{}];
         var arrayMix = [{}];
          getDetailsofFolders(data).then( (tableData) => {arrayFiles = tableData[0];
          getDetailsofFiles(data).then( (fileData) => {
           var file=fileData[0];
           arrayMix = arrayFiles.concat(file);
           this.setState({ TData: arrayMix} );
          // History.push('/'); 
          })
        } )
         return;
       }
       alert("select a file please");
       return;
     }
     var file_name=TData[selectedRow]["file_name"] ;

     var auth_token=getLoggedInUser().token;
     console.log("auth_token is "+auth_token);
     console.log("file_id is "+file_id)
     downloadFile(file_id,file_name,auth_token);
 }
 
 
 componentDidMount() {
   //alert("componentDidMount");
   var data = {
       hvfldrid: getLoggedInUser().rtpthid
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
  }
 
//the nextProps will be the fileName of the new file uploaded sent via props from MyMenu.
componentWillReceiveProps(nextProps)
{
  //alert("nextProps: "+nextProps.props);
  //alert("props now: "+this.props.props);
 if(nextProps.props!==this.props.props)
 {
   //alert("Not equal");
  var data = {
    hvfldrid: getLoggedInUser().rtpthid
    } 
    var arrayFiles =  [{}];
    var arrayMix = [{}];
     getDetailsofFolders(data).then( (tableData) => {arrayFiles = tableData[0];
     getDetailsofFiles(data).then( (fileData) => {
      var file=fileData[0];
      arrayMix = arrayFiles.concat(file);
     // alert("before the set state in willRecieve");
      //this setState triggers Render()
      this.setState({ TData: arrayMix} ); 
     })
    } )
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



const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={FakeList} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
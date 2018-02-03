import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FolderIcon from './images/GDocs.png'; 
import {getLoggedInUser,downloadFile, getFoldersOfUser,loginUser,getFolderList,getPromise, getDetails,getDetailsofFolders,getDetailsofFiles} from './login';
import Paper from 'material-ui/Paper';
import MyMenu from './MyMenu';
const styles= {
  height: 600,
  marginTop: 130,
  marginLeft: 200,
  width: '70%',
//  marginTop: theme.spacing.unit * 3,
  overflow: 'auto',
 
}

/*the array to get the folderInfo*/



export default class MyDriveList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hvName: this.props.hvName,
      hvPwd: this.props.hvPwd,
      TData: [{}], /*Array to hold the data from fetch */
      success: false,
      selected: [1]
   
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows
    });
    console.log("selected row "+selectedRows);
  };



 /*the getLoggedInUser returning nothing here. How to get the rtpthid?*/
 handleSelection(selectedRow){

   alert("row selected: "+selectedRow);
   const TData = this.state.TData;
   console.log('file_id of row '+ selectedRow +' -> '+ TData[selectedRow]["file_id"] );
      var file_id="";
      var auth_token=getLoggedInUser().token;
      console.log("auth_token is "+auth_token);
      file_id=TData[selectedRow]["file_id"] ;
      console.log("file_id is "+file_id)
      downloadFile(file_id, auth_token);
  }
  componentDidMount() {
    alert("reached componentDidMount");

      var userCred = getLoggedInUser();
   //if(!userCred.hvName){ return false;}
   alert(`componentDidMount of MyDriveList:\n userCred.userName:`+userCred.userName + `\n userCred.rtpthid  :\n`+userCred.rtpthid);
    var data = {
       // hvName: this.state.hvName,
       // hvPwd: this.state.hvPwd,
        hvfldrid: getLoggedInUser().rtpthid
        } 
        var arrayFiles =  [{}];
        var arrayMix = [{}];
        
        getDetailsofFolders(data).then( (tableData) => {
          // checkLogin(cred);
          console.log(tableData.length);
          arrayFiles = tableData[0];
          var j = 0;
          console.log(  tableData );


           
         
          var j = 0;
           for (j=0; j < arrayFiles.length; j++ ){    
                   console.log('Item '+ j +' -> '+ arrayFiles[j]["path_nm"] );
           }

          // console.log(`this.state.TData `+this.state.TData);
         } )

         getDetailsofFiles(data).then( (fileData) => {
          // checkLogin(cred);
          console.log(fileData);
          var file=fileData[0];
          
          var j = 0;
           for (j=0; j < file.length; j++ ){    
                   console.log('Item '+ j +' -> '+ file[j]["file_name"] );
           }

          arrayMix = arrayFiles.concat(file);

       //   console.log ("!!!!!!!!!!!concatenated arrays!!!!!!: \n"+arrayMix);

          var k = 0;
           for (k=0; k < arrayMix.length; k++ ){    
                   console.log('Item '+ k +' -> '+ arrayMix[k]["file_id"] );
           }
        
          //console.log("Files were" + file );   
          this.setState({ TData: arrayMix} ); 
          console.log("set state called");
 
         })
         
        

    //tableData = getFolderList(data);
    //setTimeout(function() { this.setState({success: true}); }.bind(this), 3000);

   // console.log(`tabledata is `+tableData);
    }
    
    
  



  render(){
   var TData=this.state.TData;
    var uName=getLoggedInUser().userName;
    /*If TData is not set ,  rendering with the sampleArrray */
    if(TData.length==0){
    return (
    <div>
     
      <h2> get started by uploading files or folders </h2>
    </div>
    );
    }
    /*if set, rendering with the fetched data */
    else return (
      <div style={{}}>
       <Paper style= {styles}>
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
          <TableBody  displayRowCheckbox={false}>
                  {this.state.TData.map( (row, index) => (
                    <TableRow  key={index} selected={this.isSelected(index)}>
                      <TableRowColumn>{row.path_nm ?<img src={FolderIcon} alt="folder" height='20' width='30'/>: null}</TableRowColumn>
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

/* 
    <TableBody
            displayRowCheckbox={false}
          
                      
          >
      <TableRow selectable={true} >
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>F1</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>

        <TableRowColumn>f2</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>f3</TableRowColumn>
        <TableRowColumn>person1</TableRowColumn>
        <TableRowColumn>-</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>f4</TableRowColumn>
        <TableRowColumn>person2</TableRowColumn>
        <TableRowColumn>-</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>f5</TableRowColumn>
        <TableRowColumn>me</TableRowColumn>
        <TableRowColumn>date</TableRowColumn>
        <TableRowColumn>1 MB</TableRowColumn>
      </TableRow>
    </TableBody>*/
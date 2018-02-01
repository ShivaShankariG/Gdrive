import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {getLoggedInUser, loginUser,getFolderList,getPromise, getDetails,getDetailsofFolders} from './login';

const styles= {
    marginTop: 10,
    marginLeft: -610, 
    zIndex : -2,
   // position: 'absolute',
}

/*the array to get the folderInfo*/

var x='';
/*sample array to learn mapping*/
var sampleTableData=[

 {path_nm: 'a', path_id: 'b', prnt_path_id:'c', created_at: 'd'},
 {path_nm: 'a', path_id: 'b', prnt_path_id:'c', created_at: 'd'},
 {path_nm: 'a', path_id: 'b', prnt_path_id:'c', created_at: 'd'},

];

export default class MyDriveList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hvName: this.props.hvName,
      hvPwd: this.props.hvPwd,
      TData: [{}], /*Array to hold the data from fetch */
      success: false
   
    };
  
  this.componentDidMount = this.componentDidMount.bind(this);
  }

 /*the getLoggedInUser returning nothing here. How to get the rtpthid?*/

  componentDidMount() {
    alert("reached componentDidMount");
   // getDetails() .then(([loginresp]) => {
      var userCred = getLoggedInUser();
   
   alert(`componentDidMount of MyDriveList:\n userCred.userName:`+userCred.userName + `\n userCred.rtpthid  :\n`+userCred.rtpthid);
    var data = {
        hvName: this.state.hvName,
        hvPwd: this.state.hvPwd,
        hvfldrid: userCred.rtpthid
        }

        getDetailsofFolders(data).then( (tableData) => {
          // checkLogin(cred);
          console.log(tableData.length);
          var table=tableData[0];
          var j = 0;
        
        console.log(  tableData );


           this.setState({ TData: table} ); 
           var i = 0;
           for (i=0; i < sampleTableData.length; i++ ){    
                   console.log('Item '+ i +' -> '+ sampleTableData[i]["path_nm"] );
           }
          var j = 0;
           for (j=0; j < table.length; j++ ){    
                   console.log('Item '+ j +' -> '+ table[j]["path_nm"] );
           }

          // console.log(`this.state.TData `+this.state.TData);
         } )


    //tableData = getFolderList(data);
    //setTimeout(function() { this.setState({success: true}); }.bind(this), 3000);

   // console.log(`tabledata is `+tableData);
    }
    
    
  



  render(){
    const TData = this.state.TData;
    /*If TData is not set ,  rendering with the sampleArrray */
    if(TData.length==0){
    return (
    <div>
      <Table onCellClick={this.thefn} selectable = {true}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow selectable={true} onCellClick={this.thefn}>
            <TableHeaderColumn >Name</TableHeaderColumn>
            <TableHeaderColumn>Owner</TableHeaderColumn>
            <TableHeaderColumn>Last modified by me</TableHeaderColumn>
            <TableHeaderColumn>Size</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody  displayRowCheckbox={false}>
          {sampleTableData.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{row.path_nm}</TableRowColumn>
            <TableRowColumn>{row.path_id}</TableRowColumn>
            <TableRowColumn>{row.prnt_path_id}</TableRowColumn>
            <TableRowColumn>{row.created_at}</TableRowColumn>
          </TableRow>
                  ))}
        </TableBody>
      </Table>
    </div>
    );
    }
    /*if set, rendering with the fetched data */
    else return (
      <div style={{}}>
        <Table selectable = {true}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow selectable={true} onCellClick={this.thefn}>
                <TableHeaderColumn >Name</TableHeaderColumn>
                <TableHeaderColumn>Owner</TableHeaderColumn>
                <TableHeaderColumn>Last modified by me</TableHeaderColumn>
                <TableHeaderColumn>Size</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
                  {this.state.TData.map( (row, index) => (
                    <TableRow  key={index}>
                      <TableRowColumn>{row.path_nm}</TableRowColumn>
                      <TableRowColumn>{row.path_id}</TableRowColumn>
                      <TableRowColumn>{row.prnt_path_id}</TableRowColumn>
                      <TableRowColumn>{row.created_at}</TableRowColumn>
          </TableRow>
                    ))}
            </TableBody>
        </Table>
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
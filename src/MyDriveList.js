import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {test} from './App';
import {loginUser} from './login';
const styles= {
    marginTop: 160,
    marginLeft: 300, 
    width: '60%',
    zIndex : -2,
    position: 'relative',
}
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class MyDriveList extends React.Component{

 componentDidMount(){
   alert("MyDriveList didmount");
 }
  render(){
    alert("MyDriveList render()");
    return (
    
  <div>
  <Table style={styles}
  selectable = {true}>
    <TableHeader 
    displaySelectAll={false}
    adjustForCheckbox={false}
   >
      <TableRow selectable={true}>
        <TableHeaderColumn>{test}}</TableHeaderColumn>
        <TableHeaderColumn>Owner</TableHeaderColumn>
        <TableHeaderColumn>Last modified by me</TableHeaderColumn>
        <TableHeaderColumn>Size</TableHeaderColumn>
      </TableRow>
    </TableHeader>
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
    </TableBody>
  </Table>
  
  </div>
);


  }
}

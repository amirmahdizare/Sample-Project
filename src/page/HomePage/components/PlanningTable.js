import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'rgb(40,59,82)',
    color:' white',
    fontSize:'1.4rem'
  },
  body: {
    fontSize: '1.2rem',
    color:'white'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    
    '&:nth-of-type(odd)': {
      backgroundColor:'rgb(58,86,120)',
      color:'white',
    },
    '&:nth-of-type(even)':{
      backgroundColor:'rgb(40,59,82)',
    }
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    fontSize:'2em'
  },
  icon:{
    margin:'0.2em'
  }

});

const  PlanningTable = (props) => {
  let rows=[]
  rows=props.data["items"]
  const classes = useStyles();
console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">#</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Owner</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Optimize</StyledTableCell>
            <StyledTableCell align="center">Tools</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.planName}</StyledTableCell>
              <StyledTableCell align="center">{row.owner}</StyledTableCell>
              <StyledTableCell align="center">{row.creationTime}</StyledTableCell>
              <StyledTableCell align="center" style={{backgroundColor:"rgb(7,214,129)"}}><CheckIcon fontSize="large" style={{ color:' white' }} /></StyledTableCell>
              <StyledTableCell align="center">
                <SystemUpdateAltIcon className={classes.icon} />
                <VisibilityIcon className={classes.icon} />
                <EditIcon className={classes.icon}/>
                <DeleteIcon className={classes.icon} color="secondary"/>
                
                </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export {PlanningTable}
import * as React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px 4px',
  [theme.breakpoints.down('sm')]: {
    padding: '12px 2px', 
  },
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00008D",
    color: "white",
    fontWeight: 'bold',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      lineHeight: '.2rem',
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '14px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      lineHeight: '.2rem',
    },
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LessonSchedule({ rows }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { xs: '100%', md: '90%', lg: '80%' }, 
        margin: 'auto',
        borderRadius: '12px',
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Availability</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.day}
              </StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center" sx={{ color: row.availability === "Booked" ? 'red' : 'green', fontWeight: 'bold' }}>{row.availability}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from 'react';
import { styled } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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

const convertTo24HourFormat = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (!minutes) minutes = '00';

  hours = parseInt(hours, 10);

  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};


const timeCompare = (a, b) => {
  const [startA] = a.split(' - ');
  const [startB] = b.split(' - ');
  const timeA = convertTo24HourFormat(startA);
  const timeB = convertTo24HourFormat(startB);
  return timeA.localeCompare(timeB);
};

export default function LessonSchedule({ rows }) {
  const sortedRows = rows.sort((a, b) => {
    const dayComparison = daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day);
    if (dayComparison !== 0) {
      return dayComparison;
    }
    return timeCompare(a.time, b.time);
  });

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: { xs: '100%', md: '90%', lg: '80%' }, 
        margin: 'auto',
        borderRadius: '12px',
        borderLeft: '1px solid #ccc', 
        borderRight: '1px solid #ccc', 
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
          {sortedRows.map((row) => (
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

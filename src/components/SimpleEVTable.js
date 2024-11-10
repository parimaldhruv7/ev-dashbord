import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function SimpleEVTable({ data }) {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>VIN</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Electric Range</TableCell>
            <TableCell>Fuel Eligibility</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row['VIN (1-10)']}</TableCell>
              <TableCell>{row.Make}</TableCell>
              <TableCell>{row.Model}</TableCell>
              <TableCell>{row['Model Year']}</TableCell>
              <TableCell>{row['Electric Range']}</TableCell>
              <TableCell>{row['Clean Alternative Fuel Vehicle (CAFV) Eligibility']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpleEVTable;

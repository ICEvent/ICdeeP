import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography } from '@mui/material';

import CoinRow from './CoinRow';


function CoinTable({ rows }) {

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableBody>
            {rows.map((row,i) => 
              <CoinRow key={i} row={row}/>
              )}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}

export default CoinTable;

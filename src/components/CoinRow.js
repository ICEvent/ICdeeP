import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, Typography } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CoinFacts from './CoinFacts';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function CoinRow({ row }) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
<>
              <TableRow
                key={row.coin}
                hover
                onClick={() => handleOpen(row)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
              >
                <TableCell component="th" scope="row">
                  {row.coin}
                </TableCell>
                <TableCell align="center">
                  <ReportProblemIcon />
                  <ReportProblemIcon />
                  <ReportProblemIcon />
                  </TableCell>
              </TableRow>
            

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CoinFacts coin={row} />
      </Modal>
    </>
  );
}

export default CoinRow;

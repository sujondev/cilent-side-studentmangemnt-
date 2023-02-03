import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MangeStudent = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#F33823' }}>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>Name</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>Class</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>RollNo.</TableCell>
                        <TableCell style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}>View / Edit / Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow
                    >
                        <TableCell align="center">korim</TableCell>
                        <TableCell align="center">12</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MangeStudent;
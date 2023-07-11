import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  name: string,
  role: string,
  github: string
) {
  return { name, role, github };
}

const rows = [
  createData('Andréann Poirier', "Devops", "Pannx"),
  createData('Antoine Bergeron', "Devops", "AntoineBergeron720"),
  createData('Asmae Bourhim', 'Architecte', "Asm22ae"),
  createData('Charles-Étienne Cloutier', 'Designer', 'WalldoBrie'),
  createData('Sébastien Arsenault', 'Lead Dev', 'GreygorySmirnov'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#007FFF", borderBottom: "1px solid #007FFF", fontSize: "1.6rem", fontWeight: "300", fontFamily: "roboto"}}>Noms</TableCell>
            <TableCell sx={{ color: "#007FFF", borderBottom: "1px solid #007FFF", fontSize: "1.6rem", fontWeight: "300", fontFamily: "roboto"}}>Rôle</TableCell>
            <TableCell sx={{ color: "#007FFF", borderBottom: "1px solid #007FFF", fontSize: "1.6rem", fontWeight: "300", fontFamily: "roboto"}}>Github</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.github}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
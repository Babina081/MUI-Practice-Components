import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align="center">Ip address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell align="center">{row.ip_address}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Rorke",
    last_name: "Jahn",
    email: "rjahn0@is.gd",
    gender: "Polygender",
    ip_address: "130.207.55.114",
  },
  {
    id: 2,
    first_name: "Worth",
    last_name: "Box",
    email: "wbox1@cyberchimps.com",
    gender: "Male",
    ip_address: "197.29.102.133",
  },
  {
    id: 3,
    first_name: "Rafa",
    last_name: "Gidney",
    email: "rgidney2@hubpages.com",
    gender: "Female",
    ip_address: "245.38.35.225",
  },
  {
    id: 4,
    first_name: "Suzi",
    last_name: "Purple",
    email: "spurple3@amazonaws.com",
    gender: "Genderfluid",
    ip_address: "87.201.66.6",
  },
  {
    id: 5,
    first_name: "Davidde",
    last_name: "Rolles",
    email: "drolles4@ameblo.jp",
    gender: "Male",
    ip_address: "123.225.246.21",
  },
  {
    id: 6,
    first_name: "Annabelle",
    last_name: "Ranyelld",
    email: "aranyelld5@cnbc.com",
    gender: "Female",
    ip_address: "51.203.110.37",
  },
  {
    id: 7,
    first_name: "Yehudit",
    last_name: "O' Concannon",
    email: "yoconcannon6@moonfruit.com",
    gender: "Agender",
    ip_address: "31.76.245.221",
  },
  {
    id: 8,
    first_name: "Virgie",
    last_name: "Bassilashvili",
    email: "vbassilashvili7@canalblog.com",
    gender: "Agender",
    ip_address: "133.122.172.168",
  },
  {
    id: 9,
    first_name: "Helaina",
    last_name: "Dalinder",
    email: "hdalinder8@businessinsider.com",
    gender: "Female",
    ip_address: "12.231.58.178",
  },
  {
    id: 10,
    first_name: "Kirstyn",
    last_name: "Rashleigh",
    email: "krashleigh9@deviantart.com",
    gender: "Female",
    ip_address: "242.93.20.240",
  },
];

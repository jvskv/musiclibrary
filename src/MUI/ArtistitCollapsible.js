import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import React from "react";

function Artistit(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.tiedot.artisti}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddinBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Kappaleet
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Kappaleen nimi</TableCell>¨
                    <TableCell>Albumi</TableCell>
                    <TableCell align="right">Pituus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.tiedot.map((kappale) => (
                    <TableRow key={kappale.kappale}>
                      <TableCell component="th" scope="row">
                        {kappale.kappale}
                      </TableCell>
                      <TableCell>{kappale.albumi}</TableCell>
                      <TableCell align="right">{kappale.pituus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function ArtistitCollapsible(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Artisti</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tiedot.map((kappale) => (
            <Artistit key={kappale.artisti} row={kappale} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ArtistitCollapsible;

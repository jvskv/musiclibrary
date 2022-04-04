import React, { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListIcon from "@mui/icons-material/List";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";


/* ONGELMIA:
Kappaleen lisättyä teksti jää kentälle ja default teksti tulee päälle -- TOIMII */
function LisaaKappaleMUI() {
  const [kappale, setValues] = useState({
    kappale: "",
    artisti: "",
    albumi: "",
    pituus: "",
    julkaisuPvm: new Date(),
  });

  const [viesti, setViesti] = useState("");

  const muuta = (e) => {
    setValues({
      ...kappale,
      [e.target.name]: e.target.value,
    });

    setViesti("");
  };

  const lisaaKappale = (e) => {
    setValues({
      kappale: "",
      artisti: "",
      albumi: "",
      pituus: "",
      julkaisuPvm: new Date(),
    });

    setViesti("Kappale lisätty kirjastoon!");
  };

  const tyhjenna = (e) => {
    setValues({
      kappale: "",
      artisti: "",
      albumi: "",
      pituus: "",
      julkaisuPvm: new Date(),
    });

    setViesti("");
  };

  const muutaPaiva = (e) => {
    setValues({
      ...kappale,
      julkaisuPvm: e,
    });

    setViesti("");
  };
  const [anchorNavi, setOpenNavi] = useState(null);

  const menuOpen = (e) => {
    setOpenNavi(e.currentTarget);
  };

  const menuClose = () => {
    setOpenNavi(null);
  };

  const menu = (
    <Menu
      anchorEl={anchorNavi}
      open={Boolean(anchorNavi)}
      onClose={menuClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MenuItem onClick={menuClose} component={Link} to="kappaleet">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Kappaleet" />
      </MenuItem>
      <MenuItem onClick={menuClose} component={Link} to="artistit">
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Artistit" />
      </MenuItem>
      <MenuItem onClick={menuClose} component={Link} to="lisaa">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Lisää kappale" />
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={menuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          {menu}
          <Typography variant="h5" sx={{ flexGrow: 1, textAlign: "center" }}>
            Musiikkikirjasto
          </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        >
          <div>
            <TextField
              required
              id="outlined-Kappale"
              label="Kappaleen nimi"
              /*  value={kappale.kappale}
            onChange={(e) => muuta(e)}
            fullWidth */
              // Miksi ei toimi yllä olevilla kommenteilla? Ei ota inputtia
            />
            <TextField
              required
              id="outlined-Artisti"
              label="Artisti"
              /* value={kappale.artisti}
            onChange={(e) => muuta(e)}
            fullWidth */
            />
            <TextField
              id="outlined-Albumi"
              label="Albumi"
              defaultValue="-"
              /* value={kappale.albumi}
            onChange={(e) => muuta(e)}
            fullWidth */
            />
            <TextField
              id="outlined-Pituus"
              label="Pituus"
              type="number"
              /*  value={kappale.pituus}
            onChange={(e) => muuta(e)}
            fullWidth */
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Julkaisun päivämäärä"
                value={kappale.julkaisuPvm}
                onChange={(e) => muutaPaiva(e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={(e) => lisaaKappale(e)}
            variant="contained"
            sx={{ marginRight: 3 }}
            startIcon={<CreateIcon />}
          >
            Lisää
          </Button>
          <Button
            onClick={(e) => tyhjenna(e)}
            variant="contained"
            color="secondary"
            startIcon={<ClearIcon />}
          >
            Tyhjennä
          </Button>
        </Box>
        <Typography sx={{ marginTop: 3 }}>{viesti}</Typography>
      </Paper>
    </Box>
  );
}

export default LisaaKappaleMUI;

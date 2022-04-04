import { useState } from "react";
import { Grid } from "@mui/material";
import KappaleKorttiMUI from "./KappaleKorttiMUI";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListIcon from "@mui/icons-material/List";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

function MusiikkiKirjastoMUI(props) {
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

    <Grid sx ={{ padding: '20px', margin: '20px'}} container alignItems="stretch" spacing={2}>
      {props.tiedot.map((kappale) => {
        return (
            
          <Grid item style={{ display: "flex" }} key={kappale.id}>
            <KappaleKorttiMUI kappale={kappale} />
            {/* <CardActions>
              <IconButton
                color="primary"
                component={Link}
                to={
                  "/muokkaa/" +
                  kappale.id +
                  "/" +
                  kappale.kappale +
                  "/" +
                  kappale.artisti +
                  "/" +
                  kappale.albumi +
                  "/" +
                  kappale.pituus +
                  "/" +
                  kappale.julkaisuPvm +
                  "/"
                }
              >
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </CardActions> */}
          </Grid>
        );
      })}
    </Grid>
    </Box>
  );
}

export default MusiikkiKirjastoMUI;

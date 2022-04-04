import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
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

import { Link } from "react-router-dom";

function MenuMUI() {
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
    </Box>
  );
}

export default MenuMUI;

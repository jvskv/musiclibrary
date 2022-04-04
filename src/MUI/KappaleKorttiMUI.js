import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function KappaleKorttiMUI(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography gutterBottom variant="h6" component="div">
          {props.kappale.kappale}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.kappale.artisti}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.kappale.albumi}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.kappale.pituus}
        </Typography>
      </CardContent>

      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <CardActions>
          <IconButton
            color="primary"
            component={Link}
            to={
              "/muokkaa/" +
              props.kappale.id +
              "/" +
              props.kappale.kappale +
              "/" +
              props.kappale.artisti +
              "/" +
              props.kappale.albumi +
              "/" +
              props.kappale.pituus +
              "/" +
              props.kappale.julkaisuPvm +
              "/"
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}

export default KappaleKorttiMUI;

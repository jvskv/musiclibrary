import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/lab";
import DateFnsUtils from "@date-io/date-fns";
import fiLocale from "date-fns/locale/fi";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { useParams } from "react-router";

function LisaaKappaleEditMUI() {
  let { id, kappale, artisti, albumi, pituus, julkaisuPvm } = useParams();

  let paivaTemp = julkaisuPvm.split(".");

  const [kappaleet, setValues] = useState({
    id: id,
    kappale: kappale,
    artisti: artisti,
    albumi: albumi,
    pituus: pituus,
    julkaisuPvm: new Date(paivaTemp[2], paivaTemp[1] - 1, paivaTemp[0]),
  });

  const [viesti, setViesti] = useState("");

  const muuta = (e) => {
    setValues({
      ...kappale,
      [e.target.name]: e.target.value,
    });

    const muutaJulkaisuPvm = (date) => {
      setValues({
        ...kappale,
        julkaisuPvm: date,
      });
    };

    const lisaaKappale = (e) => {
      setViesti("Muutosta ei tulla tekemään backiin seuraavassa osassa");
    };

    const tyhjenna = (e) => {
      e.preventDefault();

      setValues({
        kappale: "",
        artisti: "",
        albumi: "",
        pituus: "",
        julkaisuPvm: new Date(),
      });
    };

    return (
      <Paper sx={{ padding: "10px", margin: "10px" }}>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        >
          <form>
            <TextField
              required
              id="outlined-Kappale"
              label="Kappaleen nimi"
              value={kappaleet.kappale}
              onChange={(e) => muuta(e)}
              fullWidth
              // Miksi ei toimi yllä olevilla kommenteilla? Ei ota inputtia
            />
            <TextField
              required
              id="outlined-Artisti"
              label="Artisti"
              value={kappaleet.artisti}
              onChange={(e) => muuta(e)}
              fullWidth
            />
            <TextField
              id="outlined-Albumi"
              label="Albumi"
              defaultValue="-"
              value={kappaleet.albumi}
              onChange={(e) => muuta(e)}
              fullWidth
            />
            <TextField
              id="outlined-Pituus"
              label="Pituus"
              type="number"
              value={kappaleet.pituus}
              onChange={(e) => muuta(e)}
              fullWidth
            />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              utils={DateFnsUtils}
              locale={fiLocale}
            >
              <DatePicker
                label="Julkaisun päivämäärä"
                value={kappaleet.julkaisuPvm}
                onChange={(e) => muutaJulkaisuPvm(e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </form>
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
    );
  };
}

export default LisaaKappaleEditMUI;

import React from "react";
import LisaaKappale from "./components/LisaaKappale";
import Kappaleet from "./components/Kappaleet";
import KappaleKorttiMUI from "./MUI/KappaleKorttiMUI";
import MusiikkiKirjastoMUI from "./MUI/MusiikkiKirjastoMUI";
import TabMUI from "./MUI/TabMUI";
import ArtistitCollapsible from "./MUI/ArtistitCollapsible";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import LisaaKappaleMUI from "./MUI/LisaaKappaleMUI";
import MenuMUI from "./MUI/MenuMUI";

/* const tiedot = [
  {
    id: "1",
    kappale: "Coke",
    artisti: "Skillibeng",
    albumi: "",
    pituus: "2.55",
    julkaisuPvm: "2.2.2021",
  },
  {
    id: "2",
    kappale: "Mamacita",
    artisti: "Blacflaco, SHRTY",
    albumi: "",
    pituus: "2.32",
    julkaisuPvm: "23.8.2021",
  },
  {
    id: "3",
    kappale: "Overseas",
    artisti: "D-Block Europe, Central Cee",
    albumi: "Home Alone 2",
    pituus: "3.42",
    julkaisuPvm: "18.11.2021",
  },
]; */

const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: '#ffd180',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
    <div>
      {/* <h2>Musiikkikirjasto</h2>
      <Kappaleet tiedot = {tiedot} />
      <h2>Lisää kappale</h2>
      <LisaaKappale /> */}
      {/*  <MusiikkiKirjastoMUI tiedot = {tiedot} />  */}
      {/*  <TabMUI tiedot = { tiedot }/> */}
      {/* <ArtistitCollapsible tiedot={tiedot} /> */}
      {/* <LisaaKappaleMUI /> */}
      {/* <MenuMUI /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;

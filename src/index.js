import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LisaaKappaleMUI from './MUI/LisaaKappaleMUI';
import LisaaKappaleEditMUI from './MUI/LisaaKappaleEditMUI';
import ArtistitCollapsible from './MUI/ArtistitCollapsible';
import MusiikkiKirjastoMUI from './MUI/MusiikkiKirjastoMUI';
import MenuMUI from './MUI/MenuMUI';

/* ONGELMIA:
- Kun avaan /muokkaa avautuu musiikkikirjasto koska '*' eikä edit lomake

- ArtistitCollapsible ei löydä kappale propsia

- Miten saada TAB MusiikkikirjastoMUI

*/
const tiedot = [
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
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <App />
      <Routes>    
        <Route path='/' element={ <MenuMUI /> } />
        <Route path='kappaleet' element={ <MusiikkiKirjastoMUI tiedot = {tiedot} /> } />
        <Route path='artistit' element={ <ArtistitCollapsible tiedot ={ tiedot  } /> } /> 
        <Route path='lisaa' element={ <LisaaKappaleMUI /> } />
        <Route path='muokkaa/:id/:kappale/:artisti/:albumi/:pituus/:julkaisuPvm/' element={<LisaaKappaleEditMUI /> } />
        <Route path='*' element={ <MenuMUI /> } />
      </Routes>     
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, {useState} from "react";

function LisaaKappale () {
    const[kappale, setValues] = useState( {kappale: "", artisti: "", albumi: "", pituus: "",
    julkaisuPvm: ""} )
    const[virhe, setVirhe] = useState("")

    const muuta = (e) => {
        setValues(
            {...kappale, [e.target.name]: e.target.value }
        )
        setVirhe("")
    }

    const lisaa = () => {
        if ( kappale.kappale.length === 0 || kappale.artisti.length === 0 || kappale.pituus.length === 0 ||
            kappale.julkaisuPvm.length === 0 ) {
                setVirhe("Tarvittavia kenttiä ei ole täytetty")
            } else {
                setVirhe("Lisäys onnistui")
            }
    }

    return(
        <div>
            <form>
                <label htmlFor="kappale">Kappale </label>
                <input type='text' name="kappale" onChange={ (e) => muuta(e) } value={kappale.kappale} /><br />
                <label htmlFor="artisti">Artisti </label>
                <input type='text' name="artisti" onChange={ (e) => muuta(e) } value={kappale.artisti} /><br />
                <label htmlFor="albumi">Albumi </label>
                <input type='text' name="albumi" onChange={ (e) => muuta(e) } value={kappale.albumi} /><br />
                <label htmlFor="pituus">Pituus </label>
                <input type='text' name="pituus" onChange={ (e) => muuta(e) } value={kappale.pituus} /><br />
                <label htmlFor="julkaisuPvm">Julkaisun päivämäärä </label>
                <input type='text' name="julkaisuPvm" onChange={ (e) => muuta(e) } value={kappale.julkaisuPvm} /><br />
                <button type="button" onClick={ () => lisaa() }>Lisää kappale</button>
            </form>
            <p> { virhe } </p>
        </div>
    )
}

export default LisaaKappale
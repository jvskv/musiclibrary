import React from "react"

function Kappaleet (props) {
    return(
        <div>
            {
                props.tiedot.map ( tieto => {
                    return(
                        <p>
                            Kappale: {tieto.kappale} <br />
                            Artisti: {tieto.artisti} <br />
                            Albumi: {tieto.albumi} <br />
                            Pituus: {tieto.pituus} <br />
                            JulkaisuPvm: {tieto.julkaisuPvm} <br />
                        </p>
                    )
                }
                )
            }
        </div>
    )
}

export default Kappaleet
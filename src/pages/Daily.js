import React, { useState, useContext } from 'react'
import { AppContext } from "../context/appContext"
import { WorldDiv, CenterDiv } from "../styles/styledComponents"
import Number from "../components/Number"


function Daily() {
    const { current,  worldTotal } = useContext(AppContext)
    return (<div>
        {current != null  && worldTotal != null
            ?
            <CenterDiv>
                <WorldDiv>
                    <p class="number">Total Confirmed</p>
                    <Number number={worldTotal.TotalConfirmed} field="totalConfirmed" />
                    <p class="number">Total Deaths</p>
                    <Number number={worldTotal.TotalDeaths} field="worldTotal" />
                    <p class="number">Total Recovered</p>
                    <Number number={worldTotal.TotalRecovered} field="totalRecovered" />
                </WorldDiv>
            </CenterDiv>
            :
            <p>Data not ready</p>
        }
    </div>
    )
}

export default Daily
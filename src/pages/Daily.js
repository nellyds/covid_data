import React, { useState, useContext } from 'react'
import { AppContext } from "../context/appContext"
import { WorldDiv } from "../styles/styledComponents"
import Number from "../components/Number"


function Daily() {
    const { current, pastWeek, worldTotal } = useContext(AppContext)

    const [dailyField, setDailyField] = useState('first')
    const [dataSet, setDataSet] = useState([])

    return (<div>
        {current != null  && worldTotal != null
            ?
            <div>
                <WorldDiv>
                    <p class="number">Total Confirmed</p>
                    <Number number={worldTotal.TotalConfirmed} field="totalConfirmed" />
                    <p class="number">Total Deaths</p>
                    <Number number={worldTotal.TotalDeaths} field="worldTotal" />
                    <p class="number">Total Recovered</p>
                    <Number number={worldTotal.TotalRecovered} field="totalRecovered" />
                </WorldDiv>
            </div>
            :
            <p>Data not ready</p>
        }

    </div>

    )
}

export default Daily
import React, { useState, useContext } from 'react'
import { AppContext } from "../context/appContext"
import { getAverage, getField } from "../Util/DataParseMethods"
import FieldSelect from "../components/Forms/FieldSelect"
import TrendChart from "../components/TrendChart"
import Button from '@material-ui/core/Button';
import { WorldDiv } from "../styles/styledComponents"
import Number from "../components/Number"


function Daily() {
    const { current, pastWeek, worldTotal } = useContext(AppContext)

    const [dailyField, setDailyField] = useState('first')
    const [dataSet, setDataSet] = useState([])



    const buildChart = () => {
        let result = getField(pastWeek, dailyField)
        setDataSet(result[dailyField].reverse())
    }
    return (<div>
        {current != null && pastWeek != null && worldTotal != null
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
                <FieldSelect dailyField={dailyField} setDailyField={setDailyField} />
                <TrendChart data={dataSet} />
                <Button onClick={buildChart} variant="outlined" color="primary">
                    Build Chart
</Button>
            </div>
            :
            <p>Data not ready</p>
        }

    </div>

    )
}

export default Daily
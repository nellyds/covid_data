import React, { useState, useContext } from 'react'
import { AppContext } from "../context/appContext"
import { getAverage, getField } from "../Util/DataParseMethods"
import FieldSelect from "../components/Forms/FieldSelect"
import StatCard from "../components/StatCard"
import TrendChart from "../components/TrendChart"
import Button from '@material-ui/core/Button';
import {StatGrid} from "../styles/styledComponents"
import styled from 'styled-components';


function Daily() {
    const { current, pastWeek } = useContext(AppContext)

    const [dailyField, setDailyField] = useState('first')
    const [dataSet, setDataSet] = useState([])
    const PriceGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  grid-gap: 5px; 
  margin-top: 40px; 
`


    const buildChart = () => {
        let result = getField(pastWeek, dailyField)
        setDataSet(result[dailyField].reverse())
    }
    return (<div>
        {current != null && pastWeek != null
            ?
            <div>
                <StatGrid>
                    <StatCard name='New Positive' average={getAverage(pastWeek, 'positiveIncrease')} number={current.positiveIncrease} />
                    <StatCard name='New Negative' average={getAverage(pastWeek, 'negativeIncrease')} number={current.negativeIncrease} />
                    <StatCard name='New Death' average={getAverage(pastWeek, 'deathIncrease')} number={current.deathIncrease} />
                </StatGrid>
                <FieldSelect dailyField={dailyField} setDailyField={setDailyField} />
                <p>{dailyField}</p>
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
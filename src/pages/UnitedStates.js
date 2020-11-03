import React, { useContext, useState } from 'react'
import { AppContext } from "../context/appContext"
import { StatGrid, WorldDiv } from "../styles/styledComponents"
import StatCard from "../components/StatCard"
import { getAverage, getField } from "../Util/DataParseMethods"
import FieldSelect from "../components/Forms/FieldSelect"
import TrendChart from "../components/TrendChart"
import Button from '@material-ui/core/Button';
export default function UnitedStates() {
    const { current, pastWeek } = useContext(AppContext)
    const [dailyField, setDailyField] = useState('first')
    const [dataSet, setDataSet] = useState([])



    const buildChart = () => {
        let result = getField(pastWeek, dailyField)
        setDataSet(result[dailyField].reverse())
    }
    return (
        <div>
            {current != null && pastWeek != null
                ?
                <div>
                    <StatGrid>
                        <StatCard name='New Positive' average={getAverage(pastWeek, 'positiveIncrease')} number={current.positiveIncrease} />
                        <StatCard name='New Negative' average={getAverage(pastWeek, 'negativeIncrease')} number={current.negativeIncrease} />
                        <StatCard name='New Death' average={getAverage(pastWeek, 'deathIncrease')} number={current.deathIncrease} />
                    </StatGrid>
                    <FieldSelect dailyField={dailyField} setDailyField={setDailyField} />
                    <TrendChart data={dataSet} />
                    <Button onClick={buildChart} variant="outlined" color="primary">
                        Build Chart
                </Button>
                </div>

                :
                <div>
                    <p>Data not loaded</p>
                </div>
            }
        </div>
    )
}
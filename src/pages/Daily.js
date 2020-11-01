import React, { useEffect, useState, useContext } from 'react'
import Number from "../components/Number"
import { AppContext } from "../context/appContext"
import Trend from '../components/Trend'
import { getAverage } from "../Util/DataParseMethods"
import FieldSelect from "../components/FieldSelect"
import StatCard from "../components/StatCard"
function Daily() {
    const { current, pastWeek } = useContext(AppContext)
    const [infectedIncrease, setInfectedIncrease] = useState(0)
    const [deathIncrease, setDeathIncrease] = useState(0)
    const [hospitalizationIncrease, setHospitalizationIncrease] = useState(0)
    useEffect(()=>{
        setInfectedIncrease(getAverage(pastWeek, 'positiveIncrease'))
        setDeathIncrease(getAverage(pastWeek, 'deathIncrease'))
        setInfectedIncrease(getAverage(pastWeek, 'positiveIncrease'))
    })
    return (<div>
        {current != null
            ?
            <div>
                <StatCard name='New Positive' average={infectedIncrease} number={current.positiveIncrease}/>
                <StatCard name='New Negative' average={getAverage(pastWeek, 'negativeIncrease')} number ={current.negativeIncrease} />
                <FieldSelect />
                <Trend />
            </div>
            :
            <p>Data not ready</p>
        }

    </div>

    )
}

export default Daily
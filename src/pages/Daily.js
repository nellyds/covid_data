import React, {useEffect, useState, useContext} from 'react'
import Number from "../components/Number"
import { AppContext } from "../context/appContext"
import Axios from 'axios';
import Trend from '../components/Trend'
import {getField, getAverage} from "../Util/DataParseMethods"
function Daily(){
    const {current, pastWeek }= useContext(AppContext)
    console.log(getAverage(pastWeek, 'deathIncrease'))
    return(<div>
        {current != null
        ?
        <div>
            <p> {current.positive} </p>
        <Number field="infections" number={current.positive} />
        <Number field ="negative" number = {current.negative} />
        <Number field="pending" number={current.pending} />
        <Number field="death Increase" number={current.deathIncrease} />
        <Number field="On Ventilator" number={current.onVentilatorCurrently} />
        <Trend />
        </div>
        :
        <p>Data not ready</p>
}

    </div>

    )
}

export default Daily
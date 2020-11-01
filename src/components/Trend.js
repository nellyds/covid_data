import React, {useState, useEffect, useContext} from 'react'
import {AppContext} from "../context/appContext"
import TrendChart from "./TrendChart";
import WeeklyTrend from "./WeeklyTrends"
import moment from 'moment'
function Trend(){
    const {pastWeek} = useContext(AppContext)
    return(
        <div>
            <WeeklyTrend  />
<p  >this is where the data outputs</p>
        </div>
    )
}

export default Trend;
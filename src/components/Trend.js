import React, {useState, useEffect, useContext} from 'react'
import {AppContext} from "../context/appContext"
import TrendChart from "./TrendChart";
import WeeklyTrend from "./WeeklyTrends"
import moment from 'moment'
function Trend(){
    const {pastWeek} = useContext(AppContext)
    const [deathCurve, setDeathCurve] = useState([])
    const [infectionCurve, setInfectionCurve] = useState([])
    const [hospitalizationCurve, setHospitalizationCurve] = useState([])

    useEffect(() =>{
    const dData = pastWeek.map((d) =>{
        return {x:  d.date, y: d.death}
    })
    const iData = pastWeek.map((d)=>{
        return {x: d.date, y: d.positive}
    })
    const hData = pastWeek.map((d) =>{
        return {x: d.date, y: d.hospitalized}
    })
    },[])
    const renderCharts = () =>{
        getDeathCurve();
        getInfectionCurve();
        getHospitalizedCurve();
        const reducer = ( accumulator, item) =>{
            return accumulator + item.death;
        }

    }
    const getInfectionCurve = () =>{
        let curve = []
        for (let i=0; i < pastWeek.length; i++){
            curve.push({curve: pastWeek[i].positive, date: pastWeek[i].date})
        }

        setInfectionCurve(curve.reverse())
    }
    const getDeathCurve = () =>{
        let curve = []
        for (let i=0; i < pastWeek.length; i++){
            curve.push({curve: pastWeek[i].death, date: pastWeek[i].date})
        }
        setDeathCurve(curve.reverse())
    }
    const getHospitalizedCurve = () =>{
        let curve = []
        for (let i=0; i < pastWeek.length; i++){
            curve.push({curve: pastWeek[i].hospitalized, date: pastWeek[i].date})
        }
        setHospitalizationCurve(curve.reverse())
    }

    const getDates = () =>{

    }
    return(
        <div>
            
            <TrendChart data={deathCurve} name= "death" color="green" />
            <TrendChart data={infectionCurve} name="infections" color="blue" />
            <TrendChart data={hospitalizationCurve} name="hospitalization" color="red" />
            <WeeklyTrend  />
<p onClick={renderCharts} >this is where the data outputs</p>
        </div>
    )
}

export default Trend;
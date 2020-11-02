import React, {useContext}from 'react'
import {AppContext} from '../context/appContext'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Crosshair, MarkSeries} from 'react-vis';
function WeeklyTrend(props){
    const deathData = props.deathData
    const infData = props.infData
    const hospData = props.hospData
    const { pastWeek} = useContext(AppContext)
    const dData = pastWeek.map((d) =>{
        return {x:  d.date, y: d.deathIncrease}
    })
    const iData = pastWeek.map((d)=>{
        return {x: d.date, y: d.positiveIncrease}
    })
    const hData = pastWeek.map((d) =>{
        return {x: d.date, y: d.hospitalizedIncrease}
    })
    return(
        <div>
                    <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Date" style={{
  line: {stroke: '#ADDDE1'},
  ticks: {stroke: '#ADDDE1'}}} />
            <YAxis title="weekly"
            style={{
                line: {stroke: '#ADDDE1'},
                ticks: {stroke: '#ADDDE1'}}}
            />

                                    <MarkSeries
                animation
                    data={dData}
                    color="blue"
                    opacity='.5'
                    />
                                                     <MarkSeries
                animation

                    data={hData}
                    color="green"
                    opacity='.5'
                    />                    
        </XYPlot>
            </div>

    )
}

export default WeeklyTrend;
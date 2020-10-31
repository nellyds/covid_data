import React, {useState} from 'react'
import moment from 'moment'
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Crosshair, MarkSeries} from 'react-vis';
import { parseDate } from "../Util/auxMethods" 
const TrendChart = (props) =>{
    const data = props.data
    const dataArr = data.map((d)=> {
        return {x: parseDate(d.date), 
        y: d.curve}
    });
    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Date" style={{
  line: {stroke: '#ADDDE1'},
  ticks: {stroke: '#ADDDE1'}}} />
            <YAxis title={props.name} 
            style={{
                line: {stroke: '#ADDDE1'},
                ticks: {stroke: '#ADDDE1'}}}
            />
                <MarkSeries
                animation
                    data={dataArr}
                    color={props.color}
                    opacity='.5'
                    />
        </XYPlot>
    );
}

export default TrendChart;
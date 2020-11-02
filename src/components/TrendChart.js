import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineMarkSeries } from 'react-vis';
import { parseDate } from "../Util/auxMethods"
const TrendChart = (props) => {
    const data = props.data
    const dataArr = data.map((d) => {
        return {
            x: parseDate(d.date),
            y: d.value
        }
    });
    return (
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInRight" >
            <XYPlot
                xType="ordinal"
                width={1000}
                height={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Date" style={{
                    line: { stroke: '#ADDDE1' },
                    ticks: { stroke: '#ADDDE1' }
                }} />
                <YAxis title={props.name}
                    style={{
                        line: { stroke: '#ADDDE1' },
                        ticks: { stroke: '#ADDDE1' }
                    }}
                />
                <LineMarkSeries id={props.name}
                    onSeriesClick={(event) => {
                        console.log(event.event)
                    }}
                    animation
                    data={dataArr}
                    color="green"
                    opacity='.5'
                />
            </XYPlot>
        </ScrollAnimation>
    );
}

export default TrendChart;
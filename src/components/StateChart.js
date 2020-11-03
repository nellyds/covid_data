import React, { useState, useEffect } from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LineMarkSeries, VerticalRectSeries } from 'react-vis';
import { DataPoint, ChartHolder } from "../styles/styledComponents"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
function StateChart(props) {

    const [posDataPoint, setPosDataPoint] = useState({})
    const [negDataPoint, setNegDataPoint] = useState({})
    const [scrWidth, setScrWidth] = useState(700)
    function handleResize() {
        setScrWidth(Math.floor(window.innerWidth * .8))

    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        setScrWidth(Math.floor(window.innerWidth * .8))
    }
    )
    const data = props.data
    console.log(data)
    const dataArr = data.map(d => {
        return {
            x: d.data.state,
            y: d.data.positive
        }
    })
    const dataArrNeg = data.map(d => {
        return {
            x: d.data.state,
            y: d.data.negative
        }
    })

    return (
        <div>
            {dataArr.length > 0 ?
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInRight" >
                <ChartHolder>
                    <XYPlot
                        xType="ordinal"
                        width={scrWidth}
                        height={500}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title="State" style={{
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
                            onNearestX={(value) => { setNegDataPoint(value) }}
                            animation
                            data={dataArrNeg}
                            color="rgba(48,196,185,1)"
                            opacity='1'
                        />
                        <LineSeries id={props.name}
                            onNearestX={(value) => { setPosDataPoint(value) }}
                            animation
                            data={dataArr}
                            color="rgba(196,48,109,1)"
                            opacity='1'
                        />
                    </XYPlot>
                </ChartHolder>
                </ScrollAnimation>
                : 
                <DataPoint>
                <p>
                    Select States to compare data from!
                </p>
                </DataPoint>
            }
            <DataPoint>
                <p>State: {posDataPoint.x}, + {posDataPoint.y} : - {negDataPoint.y}</p>
            </DataPoint>
        </div>

    )
}

export default StateChart
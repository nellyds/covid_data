import React from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LineMarkSeries, VerticalRectSeries } from 'react-vis';
function StateChart(props){

        const data = props.data
        console.log(data)
        const dataArr = data.map(d=>{
            return{
                x:d.data.state,
                y:d.data.positive
            }
        })
        const dataArrNeg = data.map(d=>{
            return{
                x: d.data.state,
                y: d.data.negative
            }
        })
        dataArrNeg.unshift({x:'', y:''})
        dataArr.unshift({x:'', y:''})
        return(
            <div>
                <p>sdfds</p>
      
            <XYPlot
                xType="ordinal"
                width={1000}
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
                    animation
                    data={dataArrNeg}
                    color="rgba(48,196,185,1)"
                    opacity='1'
                />
                                <LineSeries id={props.name}
                    animation
                    data={dataArr}
                    color="rgba(196,48,109,1)"
                    opacity='1'
                />
            </XYPlot>
            </div>

        )
}

export default StateChart
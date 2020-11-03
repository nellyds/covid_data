import React, {useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import StateChart from "./StateChart"
function StateData(props){

    const [dataSets, setDataSets] = useState([])

    const getAllStates = async() =>{
        let finishedCalls = []
        for (let i=0; i < props.selected.length; i++){
            finishedCalls.push(getStateData(props.selected[i]))
        }
        Promise.all(finishedCalls).then(result =>{
            console.log(result)
            setDataSets(result)
        })
    }

    const getStateData = async (state) =>{
        let result = await axios.get('https://api.covidtracking.com/v1/states/'+ state +'/current.json').catch(console.log('something went wrong'))
        
        return result
    }
    return(
        <div>
            <p>State Data</p>

            <Button onClick={getAllStates} variant="outlined">Get Data</Button>
            <StateChart data={dataSets} />
        </div>
    )
}

export default StateData
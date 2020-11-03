import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import StateSelect from '../components/Forms/StateSelect'
import StateData from "../components/StateData"
import Chip from '@material-ui/core/Chip';
import { ChipGrid} from "../styles/styledComponents"
export default function State() {

    const [selectedState, setSelectState] = useState('')
    const [selected, updateSelected] = useState([])

    const addToArray = () => {
        if (!selected.includes(selectedState) && selected.length < 5) {
            updateSelected([...selected, selectedState])
        }
    }

    const removeFromArray = (event) => {
        console.log(event.target.textContent)
        updateSelected(selected.filter(e => e !== event.target.textContent))
    }

    return (
        <div>
            <ChipGrid>
                {
                    selected.map(item => (
                        <Chip color="blue" onClick={removeFromArray} label={item} key={item}></Chip>
                    ))
                }
            </ChipGrid>
            <StateSelect selectedState={selectedState} setSelectState={setSelectState} />
            <Button onClick={addToArray} variant="outlined" >Select</Button>
            <StateData selected={selected} />
        </div>
    )
}
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import StateSelect from '../components/Forms/StateSelect'
import StateData from "../components/StateData"
import Chip from '@material-ui/core/Chip';
import { ChipGrid, SelectForm, DataPoint} from "../styles/styledComponents"
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
            <DataPoint>
            <p>Select a state from the drop down and press the select button to prepare data from it.  Add up to 5 states. </p>
            <p>Click the 'Build Visualization' button to generate a new chart.</p>
            <p>Hover over a State's position on the X-axis to read the data point.  </p>
            <p>click a state icon to remove it from the comparison.  </p>
</DataPoint>
            <SelectForm>
            <StateSelect selectedState={selectedState} setSelectState={setSelectState} />
            <Button onClick={addToArray} variant="outlined" >Select</Button>
            </SelectForm>
            <ChipGrid>
                {
                    selected.map(item => (
                        <Chip color="blue" onClick={removeFromArray} label={item} key={item}></Chip>
                    ))
                }
            </ChipGrid>
            <StateData selected={selected} />
        </div>
    )
}
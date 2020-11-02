import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import StateSelect from '../components/Forms/StateSelect'
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
            <p>
                {
                    selected.map(item => (
                        <p onClick={removeFromArray} key={item}>{item}</p>
                    ))
                }
            </p>
            <StateSelect selectedState={selectedState} setSelectState={setSelectState} />
            <Button onClick={addToArray} variant="outlined" >Select</Button>
        </div>
    )
}
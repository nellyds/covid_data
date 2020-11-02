import React, { useState } from 'react'
import { stateList } from '../../Util/constants'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

function StateSelect(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState('')
    const select = (event) => {
        setSelected(event.target.value)
        props.setSelectState(event.target.value)
    }

    return (
        <div>
    
            <FormControl className={classes.formControl}>
                <InputLabel>State</InputLabel>
                <Select value={selected}
                    onChange={select}
                >
                    {stateList.map(value => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </Select>
            </FormControl>
        
        </div>
    )

}
export default StateSelect
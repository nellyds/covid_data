import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { fields } from "../../Util/constants"
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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

function FieldSelect(props) {
    const classes = useStyles();
    const [dataField, setDataField] = useState('')
    const onSubmit = (event) =>{
        props.setDailyField(event.target.value)
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
            <InputLabel>Field</InputLabel>
            <Select
                value={dataField}
                onChange={onSubmit}
            >
                {fields.map(value => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </Select>
</FormControl>
        </div>
    )
}
export default FieldSelect;
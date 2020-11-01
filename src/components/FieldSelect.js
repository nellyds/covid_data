import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { AppContext } from "../context/appContext"
import { getField, getAverage } from "../Util/DataParseMethods"
import { fields} from "../Util/constants"
import  TrendChart from "./TrendChart"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
function FieldSelect() {
    const { pastWeek } = useContext(AppContext)
    const [dataSet, setDataSet] = useState([])
    const [averageSet, setAverage] = useState()
    const [dataField, setDataField] = useState('')
    const { register, handleSubmit, errors } = useForm({ mode: "onblur" });
    const onSubmit = data =>{
        let field = data.field
        const result = getField(pastWeek, data.field)
        setDataField(data.field)
        setAverage(pastWeek, data.field)
        setDataSet(result[field].reverse())
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p class="inputLabel">Select Field</p>
                <select
                    class="selectField"
                    name="field"
                    aria-label="field"
                    ref={register} >
                    {fields.map(value => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <input aria-label="Form submit button" class="submitButton" type="submit" label="submit" />
            </form>
            <TrendChart data = {dataSet} name={dataField} color="blue" />
    
        </div>
    )
}
export default FieldSelect;
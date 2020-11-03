import React, { useContext, useState } from 'react'
import { AppContext } from "../context/appContext"
import { makeStyles } from '@material-ui/core/styles';
import { StatGrid, WorldDiv } from "../styles/styledComponents"
import StatCard from "../components/StatCard"
import { getAverage, getField } from "../Util/DataParseMethods"
import FieldSelect from "../components/Forms/FieldSelect"
import TrendChart from "../components/TrendChart"
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
export default function UnitedStates() {
    const useStyles = makeStyles((theme) => ({
        button: {
          display: 'block',
          marginTop: theme.spacing(2),
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        select: {
            width: 150,
            margin: 5
        }
      }));

    const { current, pastWeek, pastMonth } = useContext(AppContext)
    const classes = useStyles();
    const [dailyField, setDailyField] = useState('death')
    const [dataSet, setDataSet] = useState([])
    const [dataRange, setDataRange] = useState('weekly')
    const range = ['weekly', 'monthly']

    const buildChart = async () => {
        if (dailyField !== '') {
            if (dataRange === 'weekly'){
            let result = await getField(pastWeek, dailyField)
            setDataSet(result[dailyField].reverse())
            } else {
                let result = await getField(pastMonth, dailyField)
                console.log(result)
                setDataSet(result[dailyField].reverse())
            }
        }
    }
    return (
        <div>
            {current != null && pastWeek != null
                ?
                <div>
                    <StatGrid>
                        <StatCard name='New Positive' average={getAverage(pastWeek, 'positiveIncrease')} number={current.positiveIncrease} />
                        <StatCard name='New Negative' average={getAverage(pastWeek, 'negativeIncrease')} number={current.negativeIncrease} />
                        <StatCard name='New Death' average={getAverage(pastWeek, 'deathIncrease')} number={current.deathIncrease} />
                    </StatGrid>

        <FormControl>
                        <InputLabel>Data Range</InputLabel>
                        <Select class={classes.select}
                            value={dataRange}
                            onChange={(event) => {
                                setDataRange(event.target.value)
                            }}
                        >
                            {range.map(value => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </Select>
                        <FormHelperText>Choose a time range for data</FormHelperText>

</FormControl>
                    <FieldSelect dailyField={dailyField} setDailyField={setDailyField} />
                    {dataSet.length > 0 ?
                        <TrendChart data={dataSet} /> :
                        <p>Select a data set!</p>
                    }

                    <Button onClick={buildChart} variant="outlined" color="primary">
                        Build Chart
                </Button>
                </div>

                :
                <div>
                    <p>Data not loaded</p>
                </div>
            }
        </div>
    )
}
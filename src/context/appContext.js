import React, {useState} from 'react'
import axios from 'axios';
import { fields } from "../Util/constants"
import {getField, getAverage} from "../Util/DataParseMethods"
export const AppContext = React.createContext();

export default class AppContextProvider extends React.Component {

    state = {
        dataReady: false,
        current: null,
        pastWeek: [],
        pastMonth: []
      }
      componentDidMount = () =>{
          this.getDaily();
          this.getPastWeek();
          this.getPastMonth();
      }
      getPastMonth = async () =>{
        const result = await axios.get('https://api.covidtracking.com/v1/us/daily.json').catch(error =>{console.log(error.message)})
        const month = result.data.splice(0,30)
        this.setState({pastMonth: month})
    }
      getPastWeek = async () =>{
          const result = await axios.get('https://api.covidtracking.com/v1/us/daily.json').catch(error =>{console.log(error.message)})
          const week = result.data.splice(0,7);
            getField(week, 'positive')
          this.setState({pastWeek: week})
      }
      getDaily = async () =>{
          const result = await axios.get('https://api.covidtracking.com/v1/us/daily.json').catch(error =>{console.log(error.message)})
          this.setState({current: result.data[0]})
      }
    render(){
    return (
        <AppContext.Provider value={{...this.state}}>
            {this.props.children}
        </AppContext.Provider>
      )
    }
}
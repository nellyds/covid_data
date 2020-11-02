import React, {useContext, useEffect, useState} from 'react'
import {AppContext} from "../context/appContext";
function Trends(){

    const {pastMonth} = useContext(AppContext)
    const [field, setField] = useState({})
    return(
        <div>
            <p>Long Trends</p>
        </div>
    )
}

export default Trends
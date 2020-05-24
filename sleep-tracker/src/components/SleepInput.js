import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

const SleepInput = () => {
    const [sleepInput, setSleepInput] = useState({
        sleepStart:0,
        sleepEnd:0,
        dailyMood:0
    })
    
    return(
        <div>
            <h1>Sleep Input: Test</h1>
        </div>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
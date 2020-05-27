import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, useParams} from 'react-router-dom';


const SleepData = () => {
    const { id } = useParams();
    const history = useHistory()
    const [sleepData, setSleepData] = useState([])

    //useEffect fires on component mount, fetching sleep log to set to state for previous logs and bar graph
    useEffect(()=>{
        getData()
    },[])

    //making axios call with token created from log in to gain access to restricted data
    const getData = () =>{
        axiosWithAuth()
            .get(`http://localhost:5000/api/user:${id}`)
            .then(res=>{
                console.log(res)
                setSleepData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }
    return(
        <section>
            <div>
                <h1>Hours Slept</h1> 
                {/* Bar graph or past 7 days data */}
                <button onClick={()=>{history.push('/sleepinput')}}>+ ADD ENTRY</button>
            </div>
            <div>
                <h1>Week of:{sleepData.id} - {sleepData.id}</h1>
                {/* Sleep data Card of past data */}
            </div>
        </section>
    )
}

export default SleepData
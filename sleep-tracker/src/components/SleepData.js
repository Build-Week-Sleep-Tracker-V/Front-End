import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, useParams} from 'react-router-dom';


const SleepData = () => {
    const userId = localStorage.getItem('user id')
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
            .get(`https://my-sleep-tracker.herokuapp.com/api/entries`)
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
                <SleepChart sleepData={sleepData}/>
                <button onClick={()=>{history.push('/sleepinput')}}>+ ADD ENTRY</button>
            </div>
            <div>
                <h1>Week of:{sleepData.id[1]} - {sleepData.id[7]}</h1>
                   {sleepData.map(item=>{
                    return(
                       <div key={item.id} className='logCard'>
                           <h4>{item.date}</h4>
                           <h4>{item.fellAsleep} - {item.wokeUp}</h4>
                            <h4>{(item.fellAsleep - item.wokeUp)}</h4>
                       </div>     
                    )
                })}
            </div>
        </section>
    )
}

export default SleepData
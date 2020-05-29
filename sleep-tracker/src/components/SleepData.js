import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, useParams, Link} from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

const CardSection = styled.section`
    display:flex;
    align-items:center;
    flex-direction:column;
`
const Card = styled.div`
    width:70%;
    height:175px;
    background-color:grey;
    color:white;
    border: 1px solid black;
    margin: 1% 0%;



`
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
            .get('https://my-sleep-tracker.herokuapp.com/api/entries')
            .then(res=>{
                console.log(res)
                setSleepData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }


            


    // const idealSleep = () =>{
        
    //     const hoursSlept = [0]
    //     let sum = hoursSlept.reduce((previous, current) => current += previous);
    //     let avg = sum / hoursSlept.length;
    //     for (var i=0; i<sleepData.length;i++){
    //         if (sleepData[i].mood === 4){
    //             var time1= moment(SleepData[i].wokeUp, 'HH:MM')
    //             var time2 = moment(SleepData[i].fellAsleep, 'HH:MM')
    //             hoursSlept.push(time1.diff(time2, 'hours') + 'hours') 
    //         } return avg
    //     }
    // }
    return(
        <section>
            <h4>Your ideal amount of sleep is</h4>
                {/* <h1>{idealSleep()}</h1> */}
            
            <div>
                <h1>Hours Slept</h1> 

                <button onClick={()=>{history.push('/sleepinput')}}>+ ADD ENTRY</button>
            </div>
            <CardSection>
                <h1>Recent Sleep Entries</h1>
                   {sleepData.map(item=>{
                    
                    return(
                       <Card
                       key={item.id}
                       >
                           <Link to={`/sleepcard/${item.id}`}>Click Me!</Link>
                           <h4>Sleep cycle: {item.sleepStart} - {item.sleepEnd}</h4>
                            <h4>Hours Slept: ???</h4>
                            <h4>Mood: {item.mood}</h4>    
                       </Card>     
                    )
                })}
            </CardSection>
        </section>
    )
}

export default SleepData
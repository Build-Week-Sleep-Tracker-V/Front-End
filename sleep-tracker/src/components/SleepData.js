import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, Link} from 'react-router-dom';
import moment from 'moment'

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

  
    function idealSleep(sleepData){
        const minutes = []
        const hoursSlept = []
        var sum = 0
        
        for (var i=0; i<sleepData.length;i++){
            if (sleepData[i].mood === 4){
                var startTime=`02/01/2020 ${sleepData[i].sleepStart}`;
                var endTime = `02/02/2020 ${sleepData[i].sleepEnd}`;
                var timeSlept =(moment.utc(moment(endTime,"DD/MM/YYYY HH:mm:ss").diff(moment(startTime,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm"));
                hoursSlept.push(timeSlept)
                } 
        //     console.log(`time time slept is ${hoursSlept}`)
        //     for (var time=0; time<hoursSlept.length;time++){
        //         var split = hoursSlept[time].split(':');
        //         minutes.push((+split[0]) * 60 + (+split[1]));
        //     }
        //     console.log(`minutes ${minutes}`)
        //     for (var min = 0; min< minutes.length; min++){
        //         sum += minutes[min];
        //     }
        //    console.log(`here is the sum ${sum}`)
            }
            const numbersum = arr => arr.reduce((a,b) => a + b, 0)

        console.log(`time time slept is ${numbersum(hoursSlept)}`)
        for (var time=0; time<hoursSlept.length;time++){
            var split = hoursSlept[time].split(':');
            minutes.push((+split[0]) * 60 + (+split[1]));
            }
        console.log(`minutes ${minutes}`)
        for (var min = 0; min< minutes.length; min++){
            sum += minutes[min];
            }
       console.log(`here is the sum ${sum}`)
        console.log(`should be an array ${hoursSlept}`)
        var avg = sum/minutes.length;
        var sleephours = Math.floor(avg / 60);          
        var sleepminutes = avg % 60;

        return `${sleephours} hours and ${sleepminutes} minutes`
    }
    return(
        <section>
            <h4>Your ideal amount of sleep is</h4>
                {idealSleep(sleepData)}
                
            
            <div>
                <h1>Hours Slept</h1> 

                <button onClick={()=>{history.push('/sleepinput')}}>+ ADD ENTRY</button>
            </div>
            <CardSection>
                <h1>Recent Sleep Entries</h1>
                   {sleepData.map(item=>{
                        var startTime=`02/01/2020 ${item.sleepStart}`;
                        var endTime = `02/02/2020 ${item.sleepEnd}`;
                        var timeSlept = moment.utc(moment(endTime,"DD/MM/YYYY HH:mm:ss").diff(moment(startTime,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm")

                        console.log(`time slept ${timeSlept}` )
                       
                    return(
                       <Card
                       key={item.id}
                       >
                           <Link to={`/sleepcard/${item.id}`}>Click Me!</Link>
                           <h4>Sleep cycle: {item.sleepStart} - {item.sleepEnd}</h4>
                            <h4>Hours Slept: {timeSlept}</h4>
                            <h4>Mood: {item.mood}</h4>    
                       </Card>     
                    )
                })}
            </CardSection>
        </section>
    )
}

export default SleepData
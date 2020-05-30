import React, { useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import MoodSelector from './MoodSelector'
import {Button, Input} from './formStyles'

const SleepInput = () => {
    const history = useHistory()
    const userId = localStorage.getItem('user id')
    console.log(`this is user ID ${userId}`)

    const [sleepInput, setSleepInput] = useState({
        date: moment().format("MMM Do YY"),
        fellAsleep: '',
        wokeUp: '',   
        mood: 0, 
}
)
// console.log(sleepInput)

//bunding state and changing strings in mood and user ID to integer to be passed to the back end
const sleepEntry = {
    sleepStart: sleepInput.fellAsleep, 
    sleepEnd: sleepInput.wokeUp,
    mood: parseInt(sleepInput.mood),
    userId: parseInt(userId) }

// console.log(sleepEntry)

    const Submit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('https://my-sleep-tracker.herokuapp.com/api/entries', sleepEntry)
        .then(res => {
            console.log(res)
            history.push('/sleepdata');
        })
        .catch(err => console.log(err));
    };

    const onChange = e =>{
    // e.preventDefault()
    setSleepInput({
      ...sleepInput,
        [e.target.name]: e.target.value

    })
    
    }
    
    
    return(
        <section>
            <div>
                <form onSubmit={Submit}>
                <h4>Sleep Start</h4>
                    <Input
                    type='date'
                    name="date"
                    value={sleepInput.date}
                    onChange={onChange}
                    placeholder='date'
                    />
                    <Input
                    type='time'
                    name='fellAsleep'
                    value={sleepInput.fellAsleep}
                    onChange={onChange}
                    placeholder='Bed Time'
                    />

                <h4>Sleep End</h4>
                    <Input
                    type='time'
                    name='wokeUp'
                    value={sleepInput.wokeUp}
                    onChange={onChange}
                    placeholder='Woke Up'
                    />
      
                <MoodSelector onChange = {onChange} />   
                <Button type='submit'>Submit</Button>
      
                </form>
            </div>     
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
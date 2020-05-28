import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import moment from 'moment';
import MoodSelector from './MoodSelector'

const SleepInput = () => {
    const history = useHistory()
    const userId = localStorage.getItem('user id')
    // const {register, handleSubmit} = useForm()

    const [sleepInput, setSleepInput] = useState({
        date: moment().format("MMM Do YY"),
        fellAsleep: '',
        wokeUp: '',   
        mood: '', 

    }
    
)
        console.log(sleepInput)


    const Submit = e => {
        e.preventDefault()
        axiosWithAuth
        .post('https://my-sleep-tracker.herokuapp.com/api/entires', {sleepStart: sleepInput.fellAsleep , sleepEnd: sleepInput.wokeUp , mood:sleepInput.mood, userId:userId })
        .then(res => {
            console.log(res)
            history.push('/sleepdata');
        })
        .catch(err => console.log(err));
    };

    const onChange = e =>{
    e.preventDefault()
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
                    <input
                    type='date'
                    name="date"
                    value={sleepInput.date}
                    onChange={onChange}
                    placeholder='date'
                    />
                    <input
                    type='time'
                    name='fellAsleep'
                    value={sleepInput.fellAsleep}
                    onChange={onChange}
                    placeholder='Bed Time'
                    />

                <h4>Sleep End</h4>
                    <input
                    type='time'
                    name='wokeUp'
                    value={sleepInput.wokeUp}
                    onChange={onChange}
                    placeholder='Woke Up'
                    />

                <MoodSelector sleepInput={sleepInput} onChange = {onChange} />   
                </form>
            </div>
            <button type='submit'>Submit</button>
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
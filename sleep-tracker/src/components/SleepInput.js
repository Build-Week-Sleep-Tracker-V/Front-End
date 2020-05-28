import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import moment from 'moment';
import MoodSelector from './MoodSelector'

const SleepInput = () => {
    const history = useHistory()
    const {register, handleSubmit} = useForm()
    // const [hovered] = useState(false)
    const [sleepInput, setSleepInput] = useState({
        date: moment().format("MMM Do YY"),
        fellAsleep: '',
        wokeUp: '',   
        mood: '',

    }
)
    // const handleChange = e =>{
    //         e.preventDefault()
    //         setSleepInput({
    //         ...sleepInput,
    //         [e.target.name]: e.target.value
    //         })
    //     }

    const submit = e => {
        // e.preventDefault()
        axiosWithAuth
        .post('http://localhost:5000/api/data', sleepInput)
        .then(res => {
            console.log(res)
            history.push('/sleepdata');
        })
        .catch(err => console.log(err));
    };

    // const moodClick = e =>{
    //     e.preventDefault()
    //     e.target=!hovered

    //     setSleepInput({
    //         ...sleepInput,
    //         [e.target.name]: e.target.value
    //         })
    // }
    const onRadioChange = evt =>{
        const name = evt.target.name
        const value = evt.target.value
        setSleepInput({
          ...sleepInput,
          mood: {
            ...sleepInput.mood, [name]: value
          }
        })
        }
    
    return(
        <section>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                <h4>Sleep Start</h4>
                    <input
                    type='date'
                    name="date"
                    ref={register}
                    placeholder='date'
                    />
                    <input
                    type='time'
                    name='fellAsleep'
                    ref={register}
                    placeholder='Bed Time'
                    />
                    

                <h4>Sleep End</h4>
                    <input
                    type='time'
                    name='wokeUp'
                    ref={register}
                    placeholder='Woke Up'
                    />
                <MoodSelector register = {register} />   

                    
                </form>
            </div>
            <button type='submit'>Submit</button>
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
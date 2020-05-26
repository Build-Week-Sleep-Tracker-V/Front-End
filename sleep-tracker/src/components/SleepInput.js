import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form'
import moment from 'moment';

const SleepInput = () => {
    const history = useHistory()
    const {register, handleSubmit} = useForm()
    // const [hovered] = useState(false)
    const [sleepInput, setSleepInput] = useState({
        date: moment().format("MMM Do YY"),
        fellAsleep: '',
        sleepRating: '',

        wakeUpRating: '',
        wokeUp: '',
        
        dayRating: '',
        timeCreated: '',
        totalTimeSlept: 0
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
        e.preventDefault()
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
                    <input
                    type='integer'
                    name='sleepRating'
                    ref={register}
                    placeholder='Bed Rating'
                    />

                <h4>Sleep End</h4>
                    <input
                    type='time'
                    name='wokeUp'
                    ref={register}
                    placeholder='Woke Up'
                    />
                    <input
                    type='integer'
                    name='wakeUpRating'
                    ref={register}
                    placeholder='Wake Up Rating'
                    />
                <h4>Daily Mood</h4>    
                    <input
                    name='timeCreated'
                    type="date"
                    ref={register}
                    placeholder='Time'
                    />
                    <input
                    name='dayRating'
                    type='integer'
                    ref={register}
                    placeholder="day mood"
                    />
                    <input
                    name='totalTimeSlept'
                    type='integer'
                    ref={register}
                    placeholder='Time Slept'
                    />
                </form>
            </div>
            {/* <div className='sleepStartCard'>
                <h3>Sleep Start</h3>
                <h4>{Date()}</h4>
                <img 
                className='faceImg' 
                alt='sleepStart1'
                name='sleepStart'
                value={hovered ? (1) :(0)} 
                src={hovered ? ('sleepStart1-false')
                : (
                  'sleepStart1-true'  
                )}
                onClick={moodClick}
                />

            </div> */}
            
       

            <button type='submit'>Submit</button>
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
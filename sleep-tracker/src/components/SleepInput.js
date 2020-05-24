import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

const SleepInput = () => {
    const history = useHistory()
    const [hovered] = useState(false)
    const [sleepInput, setSleepInput] = useState({
        sleepStart:0,
        sleepEnd:0,
        dailyMood:0
    }
)
// const handleChange = e =>{
    //     e.preventDefault()
    //     setSleepInput({
    //     ...sleepInput,
    //     [e.target.name]: e.target.value
    //     })
    // }

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

    const moodClick = e =>{
        e.preventDefault()
        e.target=!hovered

        setSleepInput({
            ...sleepInput,
            [e.target.name]: e.target.value
            })
    }
    
    return(
        <section>
            {/* <div>
                <form>
                    <input
                    type='button'
                    name="sleepStart"
                    value={sleepInput.sleepStart===1}
                    onChange={handleChange}
                    onClick={hoverClick}
                    />
                </form>
            </div> */}
            <div className='sleepStartCard'>
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

            </div>
            

            <button onClick={submit}>Submit</button>
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
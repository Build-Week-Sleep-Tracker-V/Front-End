import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

const SleepInput = () => {
    const history = useHistory()
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

    const hoverClick = e =>{
        e.preventDefault()
        setSleepInput({
            ...sleepInput,
            [e.target.name]: e.target.value
            })

    }
    
    return(
        <section>
            <div>
                <from>
                    <input
                    type='button'
                    name="sleepStart"
                    value={sleepInput.sleepStart===1}
                    // onChange={handleChange}
                    onClick={hoverClick}
                    />
                </from>
            </div>
            <div>
                <from>
                    <input
                    type='button'
                    name="sleepStart"
                    value={sleepInput.sleepStart===2}
                    // onChange={handleChange}
                    onClick={hoverClick}
                    />
                </from>
            </div>
            <div>
                <from>
                    <input
                    type='button'
                    name="sleepStart"
                    value={sleepInput.sleepStart===3}
                    // onChange={handleChange}
                    onClick={hoverClick}
                    />
                </from>
            </div>
            <div>
                <from>
                    <input
                    type='button'
                    name="sleepStart"
                    value={sleepInput.sleepStart===4}
                    // onChange={handleChange}
                    onClick={hoverClick}
                    />
                </from>
            </div>
            <button onClick={submit}>Submit</button>
        </section>
    )
}

export default SleepInput

//Need to build on click form with faces that hold 1-4 value to record sleep, dialy mood
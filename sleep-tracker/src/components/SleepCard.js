import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, useParams} from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import MoodSelector from './MoodSelector'

const EditCard = styled.div`
    width:70%;
    height:100%;
    background-color:grey;
    color:white;
    border: 1px solid black;


`
const EditingCardSection = styled.section`
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`
const SleepCard = () => {
    const [editing, setEditing] = useState(false);
    const { id } = useParams();
    const history = useHistory()
    const [sleepData, setSleepData] = useState([])

    console.log(editing, id, sleepData)

    const onChange = e =>{
        e.preventDefault()
        setSleepData({
          ...sleepData,
            [e.target.name]: e.target.value
    
        })
        }

    useEffect(()=>{
        getData()
    },[])
    console.log(id)
    const getData = () =>{
        axiosWithAuth()
            .get(`https://my-sleep-tracker.herokuapp.com/api/entries/${id}`)
            .then(res=>{
                console.log(res)
                setSleepData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }

const deleteEntry = () =>{
    axiosWithAuth()
        .delete(`https://my-sleep-tracker.herokuapp.com/api/entries/${id}`)
        .then(res=>{
            console.log(res)
            history.push('/sleepdata');
        })
        .catch(err=>{
            console.log(err)
        })

}
const saveEntry = () =>{
    axiosWithAuth()
        .post(`https://my-sleep-tracker.herokuapp.com/api/entries`)
        .then(res=>{
            console.log(res)
            setSleepData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

}
const editEntry = () =>{
    setEditing(!editing)
}

    return(
       <EditingCardSection>
            <EditCard>
                <h4>Sleep cycle: {sleepData.sleepStart} - {sleepData.sleepEnd}</h4>
                <h4>Hours Slept: ???</h4>
                <h4>Mood: {sleepData.mood}</h4> 
                <button onClick={editEntry}>Edit</button>
                <button onClick={()=>{deleteEntry(id)}}>Delete</button>
            </EditCard>
            {editing ? (<form onSubmit={saveEntry}>
                <h4>Sleep Start</h4>
                    <input
                    type='time'
                    name='sleepStart'
                    value={sleepData.sleepStart}
                    onChange={onChange}
                    placeholder='Bed Time'
                    />

                <h4>Sleep End</h4>
                    <input
                    type='time'
                    name='sleepEnd'
                    value={sleepData.sleepEnd}
                    onChange={onChange}
                    placeholder='Woke Up'
                    />
      
                <MoodSelector onChange = {onChange} />   
                <button type='submit'>Submit</button>
      
                </form>)
                :(
                    <h1>Welcome to the Thunderdome</h1>
                )}
        </EditingCardSection> 
    )
}
export default SleepCard
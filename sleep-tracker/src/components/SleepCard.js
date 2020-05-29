import React, {useEffect , useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useHistory, useParams} from 'react-router-dom';
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
    const userId = localStorage.getItem('user id')
    const { id } = useParams();
    const history = useHistory()
    const [sleepData, setSleepData] = useState([])

    // console.log(editing, id, sleepData)

    //extracting state properties to change mood and id strings into integers
    const sleepEntry = {
        sleepStart: sleepData.sleepStart, 
        sleepEnd: sleepData.sleepEnd,
        mood: parseInt(sleepData.mood),
        userId: parseInt(userId) }

        
    const onChange = e =>{
        e.preventDefault()
        setSleepData({
          ...sleepData,
            [e.target.name]: e.target.value
    
        })
        }

    //Use effect fires when component mounts, then sending out axios call
    useEffect(()=>{
        getData()
    },[])

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
const saveEntry = e =>{
    e.preventDefault()
    axiosWithAuth()
        .put(`https://my-sleep-tracker.herokuapp.com/api/entries/${id}`, sleepEntry)
        .then(res=>{
            console.log(res)
            setEditing(!editing)
            history.push('/sleepdata');
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
                <button type='submit'>Save Edit</button>
      
                </form>)
                :(
                    <h1>Welcome to the Thunderdome</h1>
                )}
        </EditingCardSection> 
    )
}
export default SleepCard
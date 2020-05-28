import React from 'react'
import styled from 'styled-components'
import Emoji from 'react-emoji-render'


export const MoodContainer = styled.div`
display: flex;
`
 
// const onRadioChange = evt =>{
//     const name = evt.target.name
//     const value = evt.target.value
//     setSleepInput({
//       ...sleepInput,
//       mood: {
//         ...sleepInput.mood, [name]: value
//       }
//     })
//     }

function MoodSelector(props){
    

    return(
   
        <MoodContainer className='radios'>
             <h4>Select the emoji that best represents your mood for the day.</h4>
            <label>😃
                <input type='radio' name='mood' value='4' ref={props.register}/>
            </label>
            <label>🙂
                <input type='radio' name='mood' value='3'  ref={props.register}/>
            </label>
            <label>😐
                <input type='radio' name='mood' value='2' ref={props.register}/>
            </label>
            <label>🙁
                <input type='radio' name='mood' value='1'  ref={props.register}/>
            </label>
       </MoodContainer>
    )
}


export default MoodSelector
import React from 'react'
import styled from 'styled-components'

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

function MoodSelector(onRadioChange){


    return(
   
        <MoodContainer className='radios'>
             <h4>Select the emoji that best represents your mood for the day.</h4>
            <label>U+1F603
                <input type='radio' name='mood' value='4' onChange={onRadioChange}/>
            </label>
            <label>U+1F60C
                <input type='radio' name='mood' value='3'  onChange={onRadioChange}/>
            </label>
            <label>U+1F614
                <input type='radio' name='mood' value='2' onChange={onRadioChange}/>
            </label>
            <label>U+1F629
                <input type='radio' name='mood' value='1'  onChange={onRadioChange}/>
            </label>
       </MoodContainer>
    )
}


export default MoodSelector
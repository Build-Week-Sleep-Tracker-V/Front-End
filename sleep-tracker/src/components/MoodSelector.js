import React from 'react'
import styled from 'styled-components'

export const Moodcontainer = styled.div`
display: flex;
`

function MoodSelector(props){
    const{values}=props

    const onCheckboxChange = evt =>{
        const {name} = evt.target
        const {checked} = evt.target
        setSleepInput({
          ...sleepInput,
          Mood: {
            ...sleepInput.dayRating, [name]: checked,
          }
        })
      
        }

    return(
    <h4>Select the emoji that best represents your mood for the day.</h4>
        <MoodContainer className='checkboxes'>
            
            <label>U+1F603
                <input type='checkbox' name='verry happy' checked={values.dayRating.verryHappy} onChange={onCheckboxChange}/>
            </label>
            <label>U+1F60C
                <input type='checkbox' name='somewhat happy' checked={values.dayRating.somewhatHappy} onChange={onCheckboxChange}/>
            </label>
            <label>U+1F614
                <input type='checkbox' name='somewhat unhappy' checked={values.dayRating.somewhatUnhappy} onChange={onCheckboxChange}/>
            </label>
            <label>U+1F629
                <input type='checkbox' name='verry unhappy' checked={values.dayRating.verryUnhappy} onChange={onCheckboxChange}/>
            </label>
       </MoodContainer>
    )
}


export default MoodSelector
import React from 'react'
import styled from 'styled-components'
import Emoji from 'react-emoji-render'


export const MoodContainer = styled.div`
display: flex;
`
 

function MoodSelector(props){
    

    return(
   
        <MoodContainer className='radios'>
             <h4>Select the emoji that best represents your mood for the day.</h4>
            <label>😃
                <input type='radio' name='mood' value={props.sleepInput.fellAsleep=4}
                    onChange={props.onChange}/>
            </label>
            <label>🙂
                <input type='radio' name='mood' value={props.sleepInput.fellAsleep=3}
                    onChange={props.onChange}/>
            </label>
            <label>😐
                <input type='radio' name='mood' value={props.sleepInput.fellAsleep=2}
                    onChange={props.onChange}/>
            </label>
            <label>🙁
                <input type='radio' name='mood' value={props.sleepInput.fellAsleep=1}
                    onChange={props.onChange}/>
            </label>
       </MoodContainer>
    )
}


export default MoodSelector
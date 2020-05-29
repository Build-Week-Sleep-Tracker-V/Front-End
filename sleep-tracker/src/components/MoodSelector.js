import React from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';


export const MoodContainer = styled.div`
display: flex;
`
 

function MoodSelector(props){
    

    return(
   
        <MoodContainer className='radios'>
             <h4>Select the emoji that best represents your mood for the day.</h4>
            <label><span role='img' aria-label='very happy'>😃</span>
                <input type='radio' name='mood' value='4' checked={+}
                    onChange={props.onChange}/>
            </label>
            <label><span role='img' aria-label='somewhat happy'>🙂</span>
                <input type='radio' name='mood' value='3'
                    onChange={props.onChange}/>
            </label>
            <label><span role='img' aria-label='meh'>😐</span>
                <input type='radio' name='mood' value='2'
                    onChange={props.onChange}/>
            </label>
            <label><span role='img' aria-label='grumpy'>🙁</span>
                <input type='radio' name='mood' value='1'
                    onChange={props.onChange}/>
            </label>
       </MoodContainer>
    )
}


export default MoodSelector
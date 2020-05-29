import React from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

export const MoodSection = styled.section`
display: flex;
justify-content:center;
`
export const MoodContainer = styled.div`
margin-top:3%;
`
 

function MoodSelector(props){
    

    return(
    <MoodSection>
        <MoodContainer className='radios'>
            <label><span role='img' aria-label='very happy'>😃</span>
                <input type='radio' name='mood' value='4'
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
            <h4>Select the emoji that best represents your mood for the day.</h4>
       </MoodContainer>
    </MoodSection>
    )
}


export default MoodSelector
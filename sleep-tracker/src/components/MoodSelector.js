import React from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';


export const MoodContainer = styled.div`
display: flex;
justify-content:center;
margin-top:3%;
`
 

function MoodSelector(props){
    

    return(
        <section>
            <MoodContainer className='radios'>
                <label>😃
                    <input type='radio' name='mood' value='4'
                        onChange={props.onChange}/>
                </label>
                <label>🙂
                    <input type='radio' name='mood' value='3'
                        onChange={props.onChange}/>
                </label>
                <label>😐
                    <input type='radio' name='mood' value='2'
                        onChange={props.onChange}/>
                </label>
                <label>🙁
                    <input type='radio' name='mood' value='1'
                        onChange={props.onChange}/>
                </label>
        </MoodContainer>
        <h4>Select the emoji that best represents your mood for the day.</h4>
       </section>
    )
}


export default MoodSelector
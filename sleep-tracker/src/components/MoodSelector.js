import React from 'react';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';


export const MoodContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
margin-top:3%;
`
const MoodRadios=styled.div`
display: flex;
justify-content: center;

`

const EachMood = styled.label`
padding: 2%;
font-size: 2rem;
`

function MoodSelector(props){
    

    return(
   <section>
        <MoodContainer className='radios'>
            <div>
             <h4>Select the emoji that best represents your mood for the day.</h4>
            </div>
            <MoodRadios>
            <EachMood><span role='img' aria-label='very happy'>😃</span>
                <input type='radio' name='mood' value='4'
                    onChange={props.onChange}/>
            </EachMood>
            
            
            <EachMood><span role='img' aria-label='somewhat happy'>🙂</span>
                <input type='radio' name='mood' value='3'
                    onChange={props.onChange}/>
            </EachMood>
            <EachMood><span role='img' aria-label='meh'>😐</span>
                <input type='radio' name='mood' value='2'
                    onChange={props.onChange}/>
            </EachMood>
            <EachMood><span role='img' aria-label='grumpy'>🙁</span>
                <input type='radio' name='mood' value='1'
                    onChange={props.onChange}/>
            </EachMood>
            </MoodRadios>
       </MoodContainer>
    </section>  
    )
}


export default MoodSelector
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles=createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');
`

export const FormBody=styled.div`
background: #121212;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 100vh;
padding: 5%;
`
export const FormWrapperDiv=styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    padding: 4%;
`
export const SignUpText = styled.div`
    font-family: 'Comfortaa', cursive;
`
export const Label= styled.label`
display: flex;
flex-direction: column;
padding: 20px;

`

export const Button = styled.button`
background: #39869D;
color: #FFFFFF;
border-radius: 18px;
padding: 15px 15px;
text-align: center;
margin: 20px;

`
export const Input = styled.input`
background: linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;
border-radius: 8px 8px 0px 0px;
color: rgba(255, 255, 255, 0.87);
width: 343px;
height: 56px;
padding: 0px 0px 0px 10px;
margin-top: 10px;
`



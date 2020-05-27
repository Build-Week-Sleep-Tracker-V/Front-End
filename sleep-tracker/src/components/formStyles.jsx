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



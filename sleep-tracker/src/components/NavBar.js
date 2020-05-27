import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom';
// import GlobalStyles from './formStyles'
// const NavSection = styled.section`
//     height:70px;
//     display:flex;
//     background-color:white;
//     align-items:flex-end;
// `;
const Navigation = styled.div`
    height: 80px;
    width:100%;
    background-color:#272727;
    color:#E3E3E3;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    text-decoration: none;
    font-family: 'Comfortaa', cursive;
    
    h1{font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 54px;}

    a{
        text-decoration: none;
        color: #FBFBFB;
        &:hover{
            color: #39869D
        }
    }

    @media(max-width: 500px){
        flex-direction: column;
        height: 10%;
        justify-content: space-around;
        h1{
            font-size: 18px;
            /* padding-top: 5%; */
        }
        a{
            font-size: 14px;
        }
    }
    
`

const NavLinks=styled.div`
width: 50%;
display: flex;
justify-content: space-around;

@media(max-width: 500px){
    width: 100%;
    padding-bottom: 2%;
}
`



const NavBar = props =>{
    

    const LogOut = () => {
        const token = localStorage.getItem("token");
        if (token) {
            localStorage.removeItem('token')
        } else return console.error('no token');
        
    }

    return (
     
            <Navigation>
                <div>
                <h1>Sleep Tracker</h1>
                <p>{props.userName}</p>
                </div>
                <NavLinks>        
                <div>
                <Link className='signUpLink'to='/signup'>Sign up</Link>
                </div>
                <div>
                <Link className='loginLink' to='/login'>Login</Link>
                </div>
                <div>
                  <Link className='logOutLink' to='/login' onClick={LogOut}>Log Out</Link>  
                </div>
                </NavLinks>
            </Navigation>
        

    )
}

export default NavBar
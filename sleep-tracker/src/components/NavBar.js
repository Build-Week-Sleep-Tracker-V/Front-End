import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavSection = styled.section`
    height:100px;
    display:flex;
    background-color:white;
    align-items:flex-end;
`;
const Navigation = styled.div`
    height: 50px;
    width:100%;
    background-color:#121212;
    color:silver;
    display:flex;
    justify-content:space-evenly;
    border:1px green solid;
    
`;


const NavBar = props =>{

    return (
        <NavSection>
            <Navigation>
                <div>
                <h1>Sleep tracker - {props.firstName} placeholder {props.lastName}</h1>
                </div>
                <div>
                <Link className='loginLink' to='/login'>Log In</Link>
                <Link className='signUpLink'to='/signup'>Sign up</Link>
                </div>
            </Navigation>
        </NavSection>

    )
}

export default NavBar
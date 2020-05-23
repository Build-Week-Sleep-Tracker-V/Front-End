import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const navSection = styled.section`
    height:200px;
    display:flex;
    background-color:pink;
`;
const navBar = styled.div`
    height: 100px;
    background-color:grey;
    color:silver;
    align-items: flex-end;
`;


const NavBar = props =>{

    return (
        <navSection>
            <navBar>
                <div>
                    <h1>Sleep tracker</h1>
                <span>{props.firstName} {props.lastName}</span>
                </div>
                <div>
                <Link className='loginLink' to='/login'>Log In</Link>
                <Link className='signUpLink'to='/signup'>Sign up</Link>
                </div>
            </navBar>
        </navSection>
    )
}

export default NavBar
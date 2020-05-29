import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {FormWrapperDiv, SignUpText, GlobalStyles, FormBody, Label, Button, Input} from './formStyles'
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({
        username:'',
        password: ''
 
    })

    const onInputChange = evt=>{
        const name = evt.target.name
        const value = evt.target.value
        setLoginData({...loginData, [name]: value})
    }

    const submit = e =>{ 
        //Handle submitting forms for log in and creating token for authentication
        e.preventDefault()
        axios
            .post('https://my-sleep-tracker.herokuapp.com/api/auth/login', {username: loginData.username , password: loginData.password })
            .then(res=>{
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user id', res.data.userId)
                const token = localStorage.getItem('token')
                const userId = localStorage.getItem('user id')
                history.push('/sleepdata')
                console.log(token , userId, res)
                
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return(
        <FormBody className='form container'>
            <FormWrapperDiv>
                <h1>Login</h1>
                <Label>Username:
                    <Input type='text' placeholder='Create a username' maxLength='100' name='username' value={loginData.userName} onChange={onInputChange}/>
                </Label>
                <Label>Password:
                    <Input type='password' placeholder='Create a password' maxLength='100' name='password' value={loginData.password} onChange={onInputChange} />
                </Label>
                <Button onClick={submit}>Login</Button>
            </FormWrapperDiv>
        </FormBody>
    )
}

export default Login
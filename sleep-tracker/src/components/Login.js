import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({
        userName:'',
        password: ''
        // React - fill in properties needed for log in form that will be used for state management //
    })

        // React - onChange function to handle form changes //

    const onInputChange = evt=>{
        const [name] = evt.target
        const[value] = evt.target
        setLoginData({...loginData, [name]: value})
    }

    const submit = e =>{ 
        //Handle submitting forms for log in and creating token for authentication
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/login', loginData)
            .then(res=>{
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                history.push('/sleepdata')
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return(
        <form className='form container'>
            <div>
                <h1>Login</h1>
                <label>Username:
                    <input type='text' placeholder='Create a username' maxLength='100' name='userName' value={loginData.userName} onChange={onInputChange} />
                </label>
                <label>Password:
                    <input type='text' placeholder='Create a password' maxLength='100' name='password' value={loginData.password} onChange={onInputChange} />
                </label>
            
                {/* React - Build out form for Login - firstName, lastName, password */}

                <button onClick={submit}>Log in</button>
            </div>
        </form>
    )
}

export default Login
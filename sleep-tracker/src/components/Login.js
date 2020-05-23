import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({
        firstName:''
        // React - fill in properties needed for log in form that will be used for state management //
    })

        // React - onChange function to handle form changes //



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
        <div>
            <h1>Login</h1>
            {/* React - Build out form for Login - firstName, lastName, password */}

            <button onClick={submit}>Log in</button>
        </div>
    )
}

export default Login
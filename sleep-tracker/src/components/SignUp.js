import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignUp = () => {
    const history = useHistory()
    const [signUpData, setSignUpData] = useState({
        firstName:''
        // React - fill in properties needed for log in form that will be used for state management //
    })

        // React - onChange function to handle form changes //


    const submit = e =>{ 
        //Handle submitting forms for sign up and creating token for authentication and storing form values in server
        e.preventDefault()
        axios
            .post('http://localhost:5000/api/users', signUpData)
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
            <h1>Sign Up</h1>
           {/* React - Build out forms to handle when new users want to sign up, first name, last name, email and password */}
           <button onClick={submit}>Sign Up</button>
        </div>
    )
}

export default SignUp
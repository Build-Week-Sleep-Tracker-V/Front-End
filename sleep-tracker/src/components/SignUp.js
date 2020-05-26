import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignUp = () => {
    const history = useHistory()
    const [signUpData, setSignUpData] = useState({
        userName:'',
        password: '',
        verify: ''
        // React - fill in properties needed for log in form that will be used for state management //
    })

    const onInputChange = evt=>{
        const [name] = evt.target
        const[value] = evt.target
        setSignUpData({...signUpData, [name]: value})
    }


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
       <form>
       <div>
            <h1>Sign Up</h1>
            <h1>Login</h1>
                <label>Username:
                    <input type='text' placeholder='Create a username' maxLength='100' name='userName' value={signUpData.userName} onChange={onInputChange} />
                </label>
                <label>Password:
                    <input type='text' placeholder='Create a password' maxLength='100' name='password' value={signUpData.password} onChange={onInputChange} />
                </label>
                <label>Verify password:
                    <input type='text' placeholder='Retype your password' maxLength='100' name='verify' value={signUpData.verify} onChange={onInputChange} />
                </label>
           {/* React - Build out forms to handle when new users want to sign up, first name, last name, email and password */}
           <button onClick={submit}>Sign Up</button>
        </div>
        </form>
    )
}

export default SignUp
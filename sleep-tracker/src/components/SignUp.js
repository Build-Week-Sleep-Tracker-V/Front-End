import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormErrors= {
    userName: '',
    password: '',
    verify: ''
  }
const SignUp = () => {
    const history = useHistory()
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [signUpData, setSignUpData] = useState({
        userName:'',
        password: '',
        verify: '',
        // React - fill in properties needed for log in form that will be used for state management //
    })

    const onInputChange = evt=>{
        const [name] = evt.target
        const[value] = evt.target
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid =>{
          setFormErrors({
            ...formErrors, [name]: ''
          })
        })
        .catch(err=>{
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
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
    useEffect(()=>{
        formSchema.isValid(signUpData)
          .then(valid =>{
            setDisabled(!valid)
          })
        }, [signUpData])

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
            <button disabled = {disabled} onClick={submit}>Sign Up</button>
            </div>
        </form>
    )
}

export default SignUp
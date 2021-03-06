import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import formSchema from './formSchema'
import * as yup from 'yup'
import {FormWrapperDiv, SignUpText, GlobalStyles, FormBody, Label, Button, Input} from './formStyles'

const initialFormErrors= {
    username: '',
    password: '',
    verify: ''
  }
const SignUp = () => {
    const history = useHistory()
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [signUpData, setSignUpData] = useState({
        username:'',
        password: '',
        verify: '',
        // React - fill in properties needed for log in form that will be used for state management //
    })

    const onInputChange = evt=>{
        const name = evt.target.name
        const value = evt.target.value
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
        setSignUpData({...signUpData, [name]: value
        })
    }

    


    const submit = e =>{ 
        //Handle submitting forms for sign up and creating token for authentication and storing form values in server
        e.preventDefault()
        axios
            .post('https://my-sleep-tracker.herokuapp.com/api/auth/register', {username: signUpData.username , password:signUpData.password })
            .then(res=>{
                console.log(res)
                history.push('/login')
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
       <FormBody>
           <GlobalStyles />
           <SignUpText>
                <h1>Let's get started!</h1>
                <p>Let Sleep Tracker help you disover your ideal sleep schedule.</p>
            </SignUpText>
            <FormWrapperDiv>
                    
                <Label>Username:
                    <Input type='text' placeholder='Create a username' maxLength='100' name='username' value={signUpData.userName} onChange={onInputChange} />
                </Label>
                <Label>Password:
                    <Input type='password' placeholder='Create a password' maxLength='100' name='password' value={signUpData.password} onChange={onInputChange} />
                </Label>
                <Label>Verify password:
                    <Input type='password' placeholder='Retype your password' maxLength='100' name='verify' value={signUpData.verify} onChange={onInputChange} />
                </Label>
                <Button disabled = {disabled} onClick={submit}>Sign Up</Button>
            </FormWrapperDiv>
        </FormBody>
    )
}

export default SignUp
import * as yup from 'yup'

const formSchema = yup.object().shape({
    userName: yup.string().min(2, 'The name must be at least two characters').required('Name is required'),
    password: yup.string().min(6,'The password must be at least six characters' ).required('You must type a password'),
    verify: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default formSchema;
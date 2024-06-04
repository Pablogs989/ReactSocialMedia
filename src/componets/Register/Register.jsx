import React, {useState} from 'react'

import { useDispatch } from 'react-redux'
import {register} from '../../features/auth/authSlice'


const Register = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
})
const {name,email,password} = formData

const dispatch = useDispatch()

const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}
const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))
}


  return (
    <div>Register</div>
  )
}

export default Register
import React, { useState } from 'react'
import './Employee_Signin.css'
import logo from '../../images/egate logo 1.png'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignUpValidation'
import axios from 'axios'



const Employee_Signin = () => {

  const [values, setValues] = useState({
    ed_name: '',
    ed_mailid: '',
    ed_password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.ed_name === "" && errors.ed_mailid === "" && errors.ed_password === "") {
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/employee');
      })
      .catch(err => console.log(err));
    }
  }


  return (

    <div className='emp_login'>
      <div className='emp_login_img'>
        <img src={logo} alt="" />
      </div>
    <div className='emp_loginform'>
      <h2 className='heading'>Sign Up</h2>
      <form action="" onSubmit={handleSubmit}>
      <div className='login_input'>
          <label htmlFor="name" className='login_label'>Name</label>
          <input type="text" placeholder='Enter Name' name='ed_name'
          onChange={handleInput} className='input_field'/>
          {errors.ed_name && <span className='span_validation'>{errors.ed_name}</span>}
        </div>
        <div className='login_input'>
          <label htmlFor="email" className='login_label'>Email</label>
          <input type="email" placeholder='Enter Your Company Email' name='ed_mailid'
          onChange={handleInput} className='input_field' />
          {errors.ed_mailid && <span className='span_validation'>{errors.ed_mailid}</span>}
        </div>
        <div className='login_input'>
          <label htmlFor="email" className='login_label'>Password</label>
          <input type="password" placeholder='Enter Password' name='ed_password'
          onChange={handleInput} className='input_field'/>
          {errors.ed_password && <span className='span_validation'>{errors.ed_password}</span>}
          <p>* Password must contain the following:  
            <span className='password'>
              <ul>
                <li>A lowercase letter</li>
                <li>A Capital(Uppercase) letter</li>
                <li>A Number</li>
                <li>Minimum of 8 Characters</li>
              </ul>
              </span></p>
        </div>

        <Link to='/employee' className='login_btn'>Login</Link>
        
        <button type='submit' className='login_btn'>Sign Up</button>
      </form>
    </div>
  </div>
  )
}

export default Employee_Signin


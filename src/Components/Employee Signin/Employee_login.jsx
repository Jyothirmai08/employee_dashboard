import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
import logo from '../../images/egate logo 1.png'


const Employee_login = () => {

  const [values, setValues] = useState({
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
    if(errors.ed_mailid === "" && errors.ed_password === "") {
      axios.post('http://localhost:8081/employee', values)
      .then(res => {
        if(res.data === "Success") {
          navigate('/dashboardint');
        } else {
          alert("No record existed");
        }
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='emp_login'>
      <div className='emp_login_img'>
        <img src={logo} alt="" />
      </div>
      <div className='emp_loginform'>
        <h2 className='heading'>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='login_input'>
            <label htmlFor="email" className='login_label'>Email</label>
            <input type="email" placeholder='Enter Your Company Emailid' name='ed_mailid'
            onChange={handleInput} className='input_field'/>
            {errors.ed_mailid && <span className='span_validation'>{errors.ed_mailid}</span>}
          </div>
          <div className='login_input'>
            <label htmlFor="email" className='login_label'>Password</label>
            <input type="password" placeholder='Enter Password' name='ed_password'
            onChange={handleInput} className='input_field'/>
            {errors.ed_password && <span className='span_validation'>{errors.ed_password}</span>}
          </div>

          <button type='submit' className='login_btn'>Login</button>
          
          <Link to='/signup' className='login_btn'>Sign Up</Link>
        </form>
      </div>
    </div>
  )
}

export default Employee_login
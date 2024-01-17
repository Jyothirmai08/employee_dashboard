import React, { useState } from 'react'
import './Employee_Dashboard_Integration.css'
import { Link } from 'react-router-dom'
import Employee_Dashboard from '../Employee Dashboard/Employee_Dashboard'
import Employee_Information from '../Employee Information/Employee_Information'
import Employee_Attendance from '../Employee Attendance/Employee_Attendance'
import Employee_Approval from '../Employee Approval/Employee_Approval'


const Employee_Dashboard_Integration = () => {

  const [showempdashboard, setShowempdashboard] = useState(true);
  const [showempinfo, setShowempinfo] = useState(false);
  const [showempattendance, setShowempattendance] = useState(false);
  const [showempapproval, setShowempapproval] = useState(false);


  const handledisplayempdashboard = () => {
    setShowempdashboard(true);
    setShowempinfo(false);
    setShowempattendance(false);
    setShowempapproval(false);
  };

  const handledisplayempinfo = () => {
    setShowempdashboard(false);
    setShowempinfo(true);
    setShowempattendance(false);
    setShowempapproval(false);
  };

  const handledisplayempattendance = () => {
    setShowempdashboard(false);
    setShowempinfo(false);
    setShowempattendance(true);
    setShowempapproval(false);
  };

  const handledisplayempapproval = () => {
    setShowempdashboard(false);
    setShowempinfo(false);
    setShowempattendance(false);
    setShowempapproval(true);
  };


  return (
    <>
      <div className='emp_mainpage'>

        <div className='Employee_Dashboard'>
          <div className='Dashboard_leftnav'>
            <Link onClick={handledisplayempdashboard} className='emp_leftnav'>Dashboard</Link>
            <Link onClick={handledisplayempinfo} className='emp_leftnav'>Employee Information</Link>
            <Link onClick={handledisplayempattendance} className='emp_leftnav'>Attendance</Link>
            <Link onClick={handledisplayempapproval} className='emp_leftnav'>Approval</Link>
            <Link className='emp_leftnav'>Message</Link>
          </div>
        </div>

        <div>
        <div className='showempdashboard'>

          {showempdashboard ? (
            <>
              <Employee_Dashboard />
            </>
          ) : null}
        </div>

        <div className='showempdashboard'>
          {showempinfo ? (
            <>
              <Employee_Information />
            </>
          ) : null}
        </div>

        <div className='showempdashboard'>
          {showempattendance ? (
            <>
              <Employee_Attendance />
            </>
          ) : null}
        </div>

        <div className='showempdashboard'>
          {showempapproval ? (
            <>
              <Employee_Approval />
            </>
          ) : null}
        </div>
        </div>
      </div>



    </>
  )
}

export default Employee_Dashboard_Integration
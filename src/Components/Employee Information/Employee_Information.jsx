import React from 'react'

const Employee_Information = () => {
  return (
    <div className='emp_info'>
      <h1>Emoployee Information</h1>

      <div>
        <form action="">
        <label htmlFor="">First name:</label>
        <input type="text" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe"></input>
        </form>
      </div>

    </div>
  )
}

export default Employee_Information





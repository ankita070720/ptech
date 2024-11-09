import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboardWrapper'> 
    <div className='container'>
        <div className='row'>
       
            <div className='col-md-12 col-sm-12'>
            <h2>Welcome to Dashboard page</h2>
            <table>
  <tr>
    <th>Company</th>
    <th>Candidate</th>
    <th>Location</th>
    <th>Joining Date</th>
    <th>After 3 moth of Joining Date</th>
    <th>Company amount paid or unpaid</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>02-june-2024</td>
    <td>02-aug-2024</td>
    <td>Yes</td>
    <td>Closed</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>02-sep-2024</td>
    <td>02-nov-2024</td>
    <td>No</td>
    <td>Active</td>
  </tr>
  
</table>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Dashboard

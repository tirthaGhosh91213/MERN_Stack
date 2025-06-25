import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <>
      <p className='my-text'>Hey Tirtha</p>
      <p className='text-primary'>Hey Tirtha's pudu</p>

      <span className='bg-light'>this is a teext </span>
      <span className=''>this is a teext </span>

      <div className= 'w-25  m-4 mb-3 bg-primary fs-2 '>Hey Tirtha's pudu</div>
      <div className=  'border text-centr   fw-bold ms-3 p-4 bg-primary'>Hey Tirtha's pudu</div>
      <p className='text-primary text-opacity-50'>hey how are you </p>

    <div className='m-3'>
      <ul className='list-group list-group-numbered '>
        <li className='list-group-item'>home</li>
        <li className='list-group-item'>contact</li>
        <li className='list-group-item'>product</li>
      </ul>
    </div>
    <div className='p-3 mb-3 bg-white rounded shadow-lg'> large shadow </div>
  <table className='table table-striped table-hover'>
  <thead className='table-dark'>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First Name </th>
      <th scope='col'>Last name </th>
      <th scope='col'>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>tirtha</td>
      <td>ghosh</td>
      <td>gmail12234</td>
    </tr>
  </tbody>
  </table> 
  
{/* badge  */}

<h4>Example heading <span className="badge text-bg-secondary">new</span></h4>
<button type='button' className='btn btn-primary'>Notification <span className='badge text-bg-secondary'>4</span></button>

<button type='button ' className='mt-3 btn btn-primary position-relative'>inbox <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>99+ <span className='visually-hidden'>unread meessage</span></span></button>
  


    </>
  )
}

export default App;

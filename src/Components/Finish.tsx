import React from 'react'

function Finish({data}: {data: any}) {
  return (
    <div className='w-1/2 mx-auto'>
        You're done!
        <p>Username: {data.username}</p>
        <p>Password: {data.password}</p>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Birth Date: {data.birthDate}</p>
        <p>Phone: {data.phone}</p>
        <p>Email: {data.email}</p>

    </div>
  )
}

export default Finish

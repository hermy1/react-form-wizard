import React from 'react'

function Register() {
  return (
<div className="w-1/2 mx-auto">
  <p className="text-md mb-5 mt-8 text-center leading-tight text-gray-700">
 Register information 
  </p>
  <div className="mb-6">
    <input
      type="email"
      placeholder="Email Address"
      name="email"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
    //   oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
    />
  </div>
  <div className="mb-6">
    <input
      type="password"
      placeholder="Password"
      name="password"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
    //   oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
    />
  </div>
  <div className="mb-6">
    <input
      type="password"
      placeholder="Confirm Password"
      name="password"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
      
    />
  </div>
</div>

  )
}

export default Register

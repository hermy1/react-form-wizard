import React from 'react'


type props = {
  register: any,
  handleSubmit: any,
  next: any,
  onSubmit: any,
}

function Register({register, handleSubmit, onSubmit}: props) {

  return (
<div className="w-1/2 mx-auto">
  <p className="text-md mb-5 mt-8 text-center leading-tight text-gray-700">
 Register information 
  </p>
  <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-6">
    <input
      type="username"
      placeholder="Username"
      name="username"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
     {...register("username", { required: true })}
    />
  </div>
  <div className="mb-6">
    <input
      type="password"
      placeholder="Password"
      name="password"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
      {...register("password", { required: true })}
    />
  </div>
  <div className="mb-6">
    <input
      type="password"
      placeholder="Confirm Password"
      name="password"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
      {...register("confirmPassword", { required: true })}
    />
  </div>
  <button
    type="submit"
    className="w-full rounded-md bg-blue-500 text-white font-medium py-3"
    // onClick={handleSubmit(next)}
  >
    Next

  </button>
</form>
</div>

  )
}

export default Register

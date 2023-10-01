import React from 'react'
type props = {
  register: any,
  handleSubmit: any,
  next: any,
  onSubmit: any,
}
function Update({register, handleSubmit, next, onSubmit}: props) {
  return (
    <div className="w-1/2 mx-auto">
  <p className="text-md mb-5 mt-8 text-center leading-tight text-gray-700">
Add more information 
  </p>
  <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-6">
    <input
      type="text"
      placeholder="First Name"
      name="firstName"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
     {...register("firstName", { required: true })}
    />
  </div>
  <div className="mb-6">
    <input
      type="text"
      placeholder="Last Name"
      name="lastName"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
     {...register("lastName", { required: true })}
    />
  </div>
  <div className="mb-6">
    <input
      type="date"
      placeholder="Birth Date"
      name="birthDate"
      className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
      {...register("birthDate", { required: true })}
    />
  </div>
  <button
    type="submit"
    className="w-full rounded-md bg-blue-500 text-white font-medium py-3"
  >
    Next

  </button>
</form>
</div>
  )
}

export default Update

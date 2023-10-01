import React from 'react'


type props = {
  register: any,
  handleSubmit: any,
  onSubmit: any,
}
function Confirm({register, handleSubmit, onSubmit}: props) {
  return (
    <div className="w-1/2 mx-auto">
    <p className="text-md mb-5 mt-8 text-center leading-tight text-gray-700">
   Final
    </p>
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-6">
      <input
        type="email"
        placeholder="email"
        name="email"
        className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
       {...register("email", { required: true }, { pattern: /^\S+@\S+$/i })}
      />
    </div>
    <div className="mb-6">
      <input
        type="phone"
        placeholder="phone"
        name="phone"
        className="w-full rounded-md border-2 border-solid border-gray-200 px-4 py-3 font-medium text-gray-700"
       {...register("phone", { required: true, pattern : {value: /^\d{10}$/, message: "invalid phone number"} })}
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

export default Confirm

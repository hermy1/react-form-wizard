import React,{useState} from 'react'
import Confirm from '../Components/Confirm'
import Register from '../Components/Register'
import Update from '../Components/Update'
import {useForm, SubmitHandler } from 'react-hook-form'

type Registration = {
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  birthDate: string
}
function Home() {
  const [steps, setSteps] = useState(0 as number)
  const {register, handleSubmit } = useForm<Registration>()
  const next = () => {
    setSteps(steps + 1)
  }
  
  const prev = () => {
    setSteps(steps - 1)
  }
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {steps == 0 ? (
        <Register />
      ): steps == 1 ?(
        <Update />
      ): (
        <Confirm />
      )}

      <button onClick={()=> prev()}>Prev</button>
      <button onClick={()=>next()}>Next</button>
    </div>
  )
}

export default Home

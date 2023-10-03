import React,{useState} from 'react'
import Confirm from '../Components/Confirm'
import Register from '../Components/Register'
import Update from '../Components/Update'
import Finsih from '../Components/Finish'
import {useForm } from 'react-hook-form'

type Registration = {
  username: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  birthDate: string
  phone: string
  email: string
}
function Home() {
  const [step, setStep] = useState<number>(0)
  const [data, setData] = useState<Registration>()
  const {register, handleSubmit } = useForm<Registration>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      email: "",
    }
  })
  const next = () => {
    if (step === 2) return
    setStep(step + 1)
  }
  
  const prev = () => {
    if (step === 0) return
    setStep(step - 1)
  }


  const onSubmit = (data: Registration) => {
    if (step === 3) return
    setStep(step + 1)
    setData(data)
  }
  const steps = [
    <Register 
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      next={next}
    
    />,
    <Update
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      next={next}
    
    />,
    <Confirm 
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    
    />,
    <Finsih 
      data={data}
     />
  ];

  const CurrentStep = steps[step]
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {CurrentStep}
      <div className='mx-auto font-medium text-3xl'>
        {step}
      </div>
      <button onClick={()=> prev()}>Prev</button>
      <button onClick={()=>next()}>Next</button>
    </div>
  )
}

export default Home

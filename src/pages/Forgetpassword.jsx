import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
export const Forgetpassword = () => {
  
  const [emailSent,setemailSent]=useState(false);
  const [email,setEmail]=useState("");
  const dispatch = useDispatch();
  const {loading}=useSelector((state)=>state.auth);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setemailSent));
  }
  return (
    <div className=' text-richblack-600 justify-center flex flex-col pl-20 gap-2 items-center bg-richblack-900 w-screen h-screen'>{
      loading ?
      (<div className=' text-richblack-50 text-2xl'>Loading...</div>):
      (<div>
        <h1 className='text-3xl text-yellow-400 font-semibold'>
          {
            !emailSent?"Reset Your Password":"Check your email"
          }
        </h1>
        <p className=' w-[60%] mt-4 mb-4 text-richblack-100 font-semibold'>
          {
            !emailSent?"Have no fear we will  email you instructions to reset your password . if you dont have access we try recover your account ":` we have sent the reset email to ${email}`
          }
        </p>
        <form onSubmit={handleOnSubmit } className=' flex flex-col '>
          {
            !emailSent && (
              <label >
                <p className=' p-1 text-semibold text-xl text-richblack-100'>Email Address</p>
                <input className=' p-2  rounded-lg bg-transparent text-richblack-100 border '
                  required
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='enter your mail address'
                />
              </label>
            )
          }
          <button className=' justify-strt bg-yellow-200 w-fit mt-4 rounded-lg p-2 text-richblack-500 mb-4'
          type='submit'>
            {
              !emailSent?"Reset Password":"Resend Email"
            }
          </button>
        </form>
        <div>
          <Link to={'/login'}>
            <p className=' text-richblack-200'>
              Back to Login
            </p>
          </Link>
        </div>
      </div>)
    }</div>
  )
}

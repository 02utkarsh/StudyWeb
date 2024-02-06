import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OtpInput from 'react-otp-input'
import { sendOtp, signUp } from '../services/operations/authAPI'
import { useNavigation,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const Verifyemail = () => {
    const {loading,signupData}=useSelector((state)=>state.auth)
    
    const [otp,setOtp]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }=signupData;
    

    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    })
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log(signupData);
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    }
    return (
    <div className=' bg-richblack-900 text-white w-screen h-screen flex flex-col justify-center items-center gap-4'>
                {
                    loading?(<div>
                        loading...
                    </div>)
                    :(<div className=' my-4'>
                        <h1 className='text-2xl text-yellow-100'>Verify Email</h1>
                        <p className=' text-lg text-richblack-200'>A Verification code has been sent to you. Enter the code below </p>
                        <form onSubmit={handleOnSubmit}>
                        <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} className=' text-white bg-transparent w-full border' />}
                                />
                            <button type='submit' className=' bg-yellow-100 rounded-md p-2 mt-4'>
                                Verify Email 
                            </button>

                        </form>

                        <div className='flex gap-8 items-baseline'>
                            <div>
                                <Link to={'/login'}>
                                    <p className=' text-richblack-200 mt-4 border p-2 rounded-md'>
                                    Back to Login
                                    </p>
                                </Link>
                            </div>
                            <button onClick={()=>dispatch(sendOtp(signupData.email))} className=' border p-2 rounded-lg'>
                                Resend it 
                            </button>
                        </div>

                    </div>)
                }
    </div>
  )
}

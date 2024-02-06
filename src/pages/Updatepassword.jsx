import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';                                            
export const Updatepassword = () => {

    const dispatch=useDispatch();
    const location=useLocation();
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:"",
    })

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const {loading}=useSelector((state)=>state.auth);
    const {password,confirmPassword}=formData;
    const handleOnChange=(e)=>{
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value,
            }
           
        ))
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const token=location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword,token))
        console.log(confirmPassword,"this is ffrom update conpass")

    }


     return (
    <div className=' w-screen h-screen gap-2 flex flex-col justify-center items-center bg-richblack-900 text-richblack-100'>
        {
            loading?(<div className=' flex justify-center items-center text-xl text-yellow-200'>Loading...</div>):(<div>
                <h1 className=' text-3xl  text-white font-semibold mb-2'>Choose new Password</h1>
                <p className=' text-lg font-semibold mb-2 '>Almost done.Enter your new password and you are all Set</p>
                <form onSubmit={handleOnSubmit} className=''>
                    <label>
                        <p className='my-2 text-xl '>New Password</p>
                        <div className='  flex gap-2 items-center'>

                        <input className=' bg-transparent rounded-lg w-[40%] border p-1'
                            required
                            type={showPassword ? "text":"password"}
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder='password'
                        />
                        <span onClick={()=>setShowPassword((prev)=>!prev)}>
                            {
                                showPassword ?<AiOutlineEyeInvisible fontSize={24}/>:<IoMdEye fontSize={24}/>
                            }
                        </span>
                      </div>
                    </label>
                    <label>
                        <p className='my-2 text-xl '>Confirm New Password</p>
                        <div className='  flex gap-2 items-center'>

                        <input className=' bg-transparent rounded-lg w-[40%] border p-1'
                            required
                            type={showConfirmPassword ? "text":"password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder='Confirm password'
                        />
                        <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                            {
                                showConfirmPassword ?<AiOutlineEyeInvisible fontSize={24}/>:<IoMdEye fontSize={24}/>
                            }
                        </span>
                      </div>
                    </label>
                    <button type='submit' className=' mt-4 bg-yellow-200 w-fit p-1 text-richblack-400 border rounded-md'>
                            Reset Password 
                    </button>
                    <div>
          <Link to={'/login'}>
            <p className=' text-richblack-200 mt-4'>
              Back to Login
            </p>
          </Link>
        </div>
                </form>
            </div>)
        }
    </div>
  )
}

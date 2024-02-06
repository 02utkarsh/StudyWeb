import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Iconsbtn } from '../../Iconsbtn' 
import  Sidebar  from './Sidebar'
export const Myprofiles = () => {
    // const {user}=useSelector((state)=> state.profile)
    const user  = JSON.parse(localStorage.getItem('user'))
    console.log("this is from my profile",user);
    const navigate = useNavigate();
    if (!user) {
        // Handle the case where user data is not available
        console.log("no data available",user)
        return <div>Loading...</div>;
      }
      console.log("this is just above sidear");
      return (

      <div className=' bg-richblack-900 text-white flex justify-center w-screen h-screen '>
        <div className=''>
        {/* <Sidebar /> */}
        </div>
        <div className=' w-[75%]  flex flex-col  items-center gap-2'>
          <h1 className=' text-2xl -ml-12'>
              My Profile 
          </h1>
            {/* <section1> */}
          <div className='border border-richblack-300 p-4 rounded-xl w-[50%]'>
              <div className=' text-xl  gap-5 flex items-center'>
                  <img
                      src={user?.image}
                      alt={`profile-${user?.firstname}`}
                      className='aspect-square w-[78px] rounded-full object-cover '/>
                      <div>
                          <p>{user?.firstname +" "+user?.lastname}</p>
                          <p>{user?.email}</p>
                      </div>
                  
              </div>
  
              <div className=' bg-yellow-50 w-fit p-2 rounded-sm text-xl ml-[300px]'>
                    <Iconsbtn
                        text='Edit'
                        onclick={()=>{
                            navigate("/dashboard/settings")
                        }}
                        />
                    </div>
              
  
          </div>
                  {/* section2 */}
            
            <div className='border border-richblack-300 gap-y-4 p-4 w-[50%] rounded-xl' >
              <div className=' flex justify-around'>
                <p className=' text-xl'>About</p>
                <div className=' bg-yellow-50 w-fit p-2 rounded-sm text-xl ml-[300px]'>
                    <Iconsbtn
                        text='Edit'
                        onclick={()=>{
                            navigate("/dashboard/settings")
                        }}
                        />
                </div>
                
              </div>
              <p className=' p-2 bg-richblack-800 mt-5 rounded-lg'>{user?.additionalDetails?.about??"write something about yourself"}</p>  
            </div>
            {/* section3 */}
            <div className='border border-richblack-300 gap-y-4 p-4 w-[50%] rounded-xl'>
                <div className=' flex items-baseline'>
                    <p className='  font-bold  '>Personal Details</p>
                    <div className=' bg-yellow-50 w-fit p-2 rounded-sm text-xl ml-[300px]'>
                    <Iconsbtn
                        text='Edit'
                        onclick={()=>{
                            navigate("/dashboard/settings")
                        }}
                        />
                    </div>
                </div>

                <div className=' grid  grid-cols-2 '>
                    <div>
                        <p className=' font-bold'>Firstname</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-[80%]'>{user?.firstname}</p>
                    </div>
                    <div>
                        <p className=' font-bold'>Lastname</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-[80%]'>{user?.lastname}</p>
                    </div>
                    <div>
                        <p className=' font-bold'>email</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-fit'>{user?.email}</p>
                    </div>
                    <div>
                        <p className=' font-bold'>Gender</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-[80%]'>{user?.additionalDetails?.gender}</p>
                    </div>
                    <div>
                        <p className=' font-bold'>Contact Number</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-[80%]'>{user?.additionalDetails?.contactNumber}</p>
                    </div>
                    <div>
                        <p className=' font-bold'>Date of Birth</p>
                        <p className=' bg-richblack-800 p-1 rounded-md w-[80%]'>{user?.additionalDetails?.dateOfBirth??"add you DOB"}</p>
                    </div>
                </div>


            </div>
        </div>
        
  
      </div>
    )
}

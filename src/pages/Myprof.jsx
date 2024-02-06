import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Iconsbtn } from '../components/Iconsbtn' 

export const Myprof = () => {
  // const {user}=useSelector((state)=> state.profile)
  const user  = JSON.parse(localStorage.getItem('user'))
  console.log("this is from my profile",user);
  const navigate = useNavigate();
  if (!user) {
      // Handle the case where user data is not available
      console.log("no data available",user)
      return <div>Loading...</div>;
    }
    return (
    <div className=' bg-richblack-900 text-white'>
        <h1>
            My Profile 
        </h1>

        <div>
            <div>
                <img
                    src={user?.image}
                    alt={`profile-${user?.firstName}`}
                    className='aspect-square w-[78px] rounded-full object-cover '/>
                    <div>
                        <p>{user?.firstName +" "+user?.lastName}</p>
                        <p>{user?.email}</p>
                    </div>
                
            </div>

            <Iconsbtn
                text="Edit"
                onClick={()=>{
                    navigate("/dashboard/settings")
                }}
            />

        </div>


    </div>
  )
}

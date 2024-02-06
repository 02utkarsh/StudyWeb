import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import  Sidebar  from '../components/core/Dashboard/Sidebar';
export const Dashboard = () => {
  const {loading:authLoading}=useSelector((state)=> state.auth);
  const {loading:profileLoading}=useSelector((state)=> state.profile);
  console.log("this is the dashboard section")

  if(authLoading||profileLoading){
    return(
        <div>
            Loading...
        </div>
    )
  }
    return (
    <div className=' relative flex  bg-richblack-800'>
      <Sidebar/>
      <div className=' overflow-auto'>
        <div className=' mx-auto   py-10'>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

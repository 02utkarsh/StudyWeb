import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getUserEnrolledCourses} from '../../../services/operations/profileAPI'
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';
export const Enrolledcourses = () => {
  
    const {token}=useSelector((state)=>state.auth);
    const [enrolledCourses,setenrolledCourses]=useState(null);

    const getEnrolledCourses= async()=>{
        try {
            const response= await getUserEnrolledCourses(token);
            setenrolledCourses(response)
        } catch (error) {
            console.log("unble to  Fetch details "+error.message)
        }
    }
    useEffect(()=>{
        getEnrolledCourses();
    },[])

    return (
    <div className=' text-white font-semibold text-xl p-5 w-screen h-screen'>
        <div className=' font-bold'>EnrolledCourses</div>
        {
            !enrolledCourses?(<div>
                loading...
            </div>)
            :(!enrolledCourses.length?(<p>You have not enrolled in any course yet </p>):(
                <div>
                    <div>
                        <p>Course Name</p>
                        <p>Duration</p>
                        <p>Progress</p>
                    </div>
                    {
                        enrolledCourses.map((course,index)=>{
                            <div>
                                <div>
                                    <img src={course.thumbnail}/>
                                    <div>
                                        <p>{course.courseName}</p>
                                        <p>{course.courseDescription}</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        course?.totalDuration
                                    }
                                </div>
                                <div>
                                    <p>Progress:{course.progressPercentage||0}%</p>
                                    <ProgressBar completed={course.progressPercentage||0} 
                                        height='8px'
                                        isLabelVisible={false}
                                    />

                                </div>
                            </div>
                        })
                    }
                </div>
            ))
        }
    </div>
  )
}

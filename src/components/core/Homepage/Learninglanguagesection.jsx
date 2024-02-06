import React from 'react'
import { Highlightedtext } from './Highlightedtext'
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import comparewithothers from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
export const LearningLanguagesection = () => {
  return (
    <div>
      <div className=' flex flex-col  gap-5 items-center justify-center w-10/12 mx-auto'>

        <p className=' font-bold text-4xl nowrap'>
          Your Swiss Knife  for 
          <Highlightedtext text={"Learning new Language"}/>
        </p>

        <div className=' text-center text-richblack-400 mx-auto text-base font-medium w-[70%]'>
          using spin making learning multiple languages easy. with 20+ languages  with real time voice-over,
          progress tracking , custom schedule and more.
        </div>


        <div className=' flex items-center justify-center mt-5 w-full'>
          <img src={Know_your_progress} className=' object-contain w-[32%] -mr-20 ml-16'/>
          <img src={comparewithothers} className=' object-contain w-[36%] -mr-24'/>
          <img src={plan_your_lesson} className=' object-conain w-[33%]'/>
        </div>




      </div>






    </div>
  )
}

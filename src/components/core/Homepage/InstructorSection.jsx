import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import { Highlightedtext } from './Highlightedtext'
import { CTAButton } from './CTAButton'
export const InstructorSection = () => {
  return (
    <div> 
        <div className=' flex flex-row gap-10 items-center justify-center mx-auto p-5 w-11/12  '>
            <div className='w-[40%] '>
                <img src={Instructor}/>
            </div>
            <div className=' flex flex-col text-4xl text-white font-semibold w-[45%] gap-8'>
                <div>Become an 
                    <Highlightedtext text={"Instructor"}/>
                </div>
                <p className='font-medium text-[16px] w-[90%] text-richblack-300'>
                    Instructor  from  around the world teach millions of students on Notions.We provide the tools and skills  to teach what you love .
                </p>
                <div className=' w-fit'>
                    <CTAButton active={true} linkto={'./signup'}>
                        Start Learning Today
                    </CTAButton>
                </div>
                
            </div>
        </div>
    </div>
  )
}

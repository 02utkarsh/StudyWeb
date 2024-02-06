import React from 'react'
import { Highlightedtext } from './Highlightedtext'
import { CTAButton } from './CTAButton'
import { FaLongArrowAltRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


export const Codeblock = ({position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codecolor}) => {
  return (
    <div className={`flex ${position} my-20 justify-between ml-32`}>
    {/* section 1 */}
    <div className='flex flex-col w-[50%] gap-8'>
        {heading}
        <div className=' ring-richblack-300 font-bold'>
            {subheading}
        </div>
        <div className='flex gap-7 mt-7'>
            <CTAButton linkto={ctabtn1.linkto} active={ctabtn1.active}>
                <div className=' flex gap-2 items-center'>   
                    {ctabtn1.text}
                    <FaLongArrowAltRight/>
                </div>
            </CTAButton>
            <CTAButton linkto={ctabtn2.linkto} active={ctabtn2.active}>
                <div className=' flex gap-2 items-center'>   
                    {ctabtn2.text}
                    <FaLongArrowAltRight/>
                </div>
            </CTAButton>
        </div>
        
    </div>
    {/* section 2 */}
    <div className=' flex flex-row h-fit  w-[100%] py-4 lg:w-[500px]  border border-blue-200 shadow-blue-300 bg-transparent bg-gradient-to-r from-blue-500 to-transparent'>
        <div className=' flex flex-col  text-center w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>

        </div>
        <div className={`flex flex-col w-[90%] gap-2 font-bold font-mono ${codecolor} pr-2 `}>
            <TypeAnimation
                sequence={[codeblock,5000,""]}
                repeat={Infinity}
                cursor={true}
                style={
                    {
                        whiteSpace:"pre-line",
                        display:"block"
                    }
                }
                omitDeletionAnimation={true}
            />     
        </div>


    </div>




    </div>
  )
}

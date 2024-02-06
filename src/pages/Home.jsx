import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import {Highlightedtext} from "../components/core/Homepage/Highlightedtext"
import { CTAButton } from '../components/core/Homepage/CTAButton';
import Banner from '../assets/Images/banner.mp4'
import { Codeblock } from '../components/core/Homepage/Codeblock';
import { Timelinesection } from '../components/core/Homepage/Timelinesection';
import { LearningLanguagesection } from '../components/core/Homepage/Learninglanguagesection';
import { InstructorSection } from '../components/core/Homepage/InstructorSection';
import Footer from '../components/Footer';
import { Exploremore } from '../components/core/Homepage/Exploremore';
export const Home = () => {
  return (
    // this is the main division
   

    <div className=' w-12/12  mx-auto '>
    {/* section 1 */}
    <div className='  relative flex flex-col w-12/12 items-center text-white justify-between bg-richblack-900 p-16' >
        <Link to={'/signup'}>
            <div className=' group mt-1 p-1 mx-auto rounded-full bg-richblack-800 text-richblack-200 transition-all duration-75 hover:scale-95'>
                <div className='flex items-center gap-2 px-10 py-[5px] rounded-full transition-all duration-75 group-hover:bg-richblack-900'>
                    <p> Become an Instructor </p>
                    <FaLongArrowAltRight />
                </div>
            </div>
        </Link>
        <div className='flex mt-4 p-1 justify-between items-center gap-2 text-4xl font-semibold '>
        Empower your Future with 
        <Highlightedtext text={"Coding Skills"}/>
        </div>

        <div className='mt-4 w-[78%] text-center font-semibold text-base text-richblack-300'>
            With  our online coding courses,you can learn at your own pace , from anywhwre in the world ,and get access to all the resource,including hands on projects,quizzess,and persinalised feedback from the Instructors
        </div>


        <div className='flex flex-row  gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"} >
                Learn more
            </CTAButton>
            <CTAButton active={false} linkto={"/signup"}>
                Read more
            </CTAButton>
        </div>

        <div className=' mx-4 my-8 shadow-blue-300 p-2  relative'>
            <video
            muted
            loop
            autoPlay
            className=' w-[60%] mx-auto  z-10  bg-transparent'
            >
            <source src={Banner} type='video/mp4'/>
            </video>
            <div className=' bg-white w-[100%] h-[100%] mr-20 absolute top-0 -z-10  '> </div>
        </div>

        {/* this is the code sectrion one */}
        <div>
            <Codeblock position={"lg:flex-row"} 
            heading={
                <div className='text-4xl font-semibold'>
                <p>
                Unlock your <Highlightedtext text={"coding potential"}/>
                with our online courses
                </p>
                </div>
            }
            subheading={"Online courses: a digital gateway to boundless knowledge, offering flexibility and accessibility beyond classroom confines. They empower learners, transcending geographical barriers, fostering self-paced, enriching educational journeys."}
            ctabtn1={{
                linkto:'./signup',
                text:'Try it Yourself',
                active:true
            }}
            ctabtn2={{
                linkto:'./signup',
                text:'know more',
                active:false
            }}
            codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>Short HTML</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a minimal HTML example.</p>
</body>
</html>`}/>
        </div>

        {/* this is the code section one-2 */}
        <div>
            <Codeblock position={"lg:flex-row-reverse"} 
            heading={
                <div className='text-4xl font-semibold'>
                <p>
                Unlock your <Highlightedtext text={"coding potential"}/>
                with our online courses
                </p>
                </div>
            }
            subheading={"Online courses: a digital gateway to boundless knowledge, offering flexibility and accessibility beyond classroom confines. They empower learners, transcending geographical barriers, fostering self-paced, enriching educational journeys."}
            ctabtn1={{
                linkto:'./signup',
                text:'Try it Yourself',
                active:true
            }}
            ctabtn2={{
                linkto:'./signup',
                text:'know more',
                active:false
            }}
            codeblock={`<!DOCTYPE html>
<html>
<head>
  <title>Short HTML</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a minimal HTML example.</p>
</body>
</html>`}/>
        </div>

        <div>
            <Exploremore/>
        </div>



    </div>


    {/* section 2 */}
    <div className=' text-richblack-400 bg-white'>
            <div className='homepage-bg h-[333px] bg-white'>
            <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto '>
                {/* added this block only just to add the gap between the teo block  */}
                <div className='h-[80px]'></div>
            
                <div className='flex gap-7 text-white'>
                        <CTAButton active={true} linkto={'./signup'}>
                            <div className='flex flex-row items-center gap-3'>
                                Explore full Catalog
                                <FaLongArrowAltRight/>
                            </div>  
                        </CTAButton>

                        <CTAButton active={false} linkto={'./signup'}>
                            <div className='flex flex-row items-center gap-3'>
                                Learn more
                            </div>  
                        </CTAButton>
                    </div>



            </div>
            </div>

            <div className=' gap-7 w-11/12 max-w-content flex flex-col justify-center ml-32'>
                <div className='flex mx-auto gap-8 mb-10 mt-[90px]'>
                    <div className=' text-richblack-900 text-4xl font-semibold w-[45%] '>
                        Get the skills you need for a 
                        <Highlightedtext text={'Job that is in demand'}/>
                    </div>
                     
                    <div className=' flex flex-col gap-10 w-[40%] items-start '>
                        <p className='text-[16px]'>The modern notions is the dictates its own terms.Today, be a part of competetive specialist  requires more than professionalz skills</p>
                        <CTAButton active={true} linkto={'/signup'}>
                            <div>
                            learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>
                
            </div>
            <Timelinesection/>
            <LearningLanguagesection/>

            <div className=' w-[full] mx-auto  flex flex-col items-center justify-center gap-8 bg-richblack-800'>
                <InstructorSection/>

                <h2 className=' text-center text-4xl  '>
                    Review from Other learners
                </h2>

            </div>

            

    </div>

    <Footer/>
    </div>

  )
}

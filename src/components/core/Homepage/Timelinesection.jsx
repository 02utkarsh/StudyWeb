import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import Timeline from "../../../assets/Images/TimelineImage.png"
export const Timelinesection = () => {
  return (
    <div>
        <div className='flex flex-row gap-0 items-center p-16 justify-center'>
            {/* left coloumn */}
            <div className='flex flex-col w-[45%] gap-6  font-bold  justify-end'>
                <div className=' flex gap-4 items-center  '>
                    <img src={Logo1}/>
                    <div className='flex flex-col'>
                        <div>leadership</div>
                        <div>Fully commited to the success company</div>
                    </div>
                </div>  
                <div className=' flex gap-4 items-center'>
                    <img src={Logo2}/>
                    <div className='flex flex-col'>
                        <div>leadership</div>
                        <div>Fully commited to the success company</div>
                    </div>
                </div>
                <div className=' flex gap-4 items-center'>
                    <img src={Logo3}/>
                    <div className='flex flex-col'>
                        <div>leadership</div>
                        <div>Fully commited to the success company</div>
                    </div>
                </div>
                <div className=' flex gap-4 items-center'>
                    <img src={Logo4}/>
                    <div className='flex flex-col'>
                        <div>leadership</div>
                        <div>Fully commited to the success company</div>
                    </div>
                </div>
            </div>


            <div className=' relative w-[42%]  shadow-blue-400 flex justify-start '>

                <img src={Timeline} alt='timeline image' className=' '/>
                <div className=' bg-caribbeangreen-800 flex flex-row text-white absolute p-4 w-[67%] -bottom-6 left-24'>
                    <div className=' flex flex-row gap-5 px-4 items-center border-r border-caribbeangreen-300'>
                                <p className=' text-3xl font-bold text-white'>10</p>
                                <p className=' text-sm font-sm text-caribbeangreen-500'> Years of Experince</p>
                    </div>

                    <div className=' flex flex-row gap-5 items-center px-5'>
                                <p className=' text-3xl font-bold text-white'>250</p>
                                <p className=' text-sm font-sm text-caribbeangreen-500'> Types of Courses</p>
                    </div>


                </div>
            </div>

        </div>
    </div>
  )
}

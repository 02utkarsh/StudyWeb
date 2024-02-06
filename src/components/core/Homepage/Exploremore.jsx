import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import { Highlightedtext } from './Highlightedtext';
const tabnames=[
    "Free",
    "New to Coding",
    "Most popular",
    "Skill paths",
    "Carrer paths"
];
export const Exploremore = () => {
    const [currentTab,setCurrentTab]=useState(tabnames[0]);
    const [courses,setCourses]=useState(HomePageExplore[0].courses)
    const [currentcard,setcurrentcard]=useState(HomePageExplore[0].courses[0].heading)

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result=HomePageExplore.filter((course)=> course.tag===value);
        setCourses(result[0].courses);
        setcurrentcard(result[0].courses[0].heading);
    }

  return (
    <div>
        <div className='text-4xl font-semibold flex ml-20 '>
            Unlock the  
            <Highlightedtext text={' - Power of Code'}/>
        </div>
        <p className=' text-center ring-richblack-400 text-sm mt-3'>
            Learn to build anything you imagine
        </p>
        <div className=' flex flex-row gap-6 mt-6 bg-richblack-800 rounded-full p-3 ml-7'>
            {
                tabnames.map((element,index)=>{
                     return(
                        <div
                            className={`text-[16px] flex flex-row item-center gap-1 
                                ${currentTab ===element ?" bg-richblack-900 text-richblack-5 font-medium":"text-richblack-200"}
                            rounded-full transition-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 p-1`}
                            key={index}
                            onClick={()=> setMyCards(element)}>
                            {element}
                        </div>
                     )
                })
            }
        </div>
    </div>
  )
}

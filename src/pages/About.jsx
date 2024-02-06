import React from 'react'
// import HighlighedtText from "../components/core/Homepage/Highlightedtext"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/Footer'
import { Highlightedtext } from '../components/core/Homepage/Highlightedtext'

export const About = () => {
  return (
    <div className='mx-auto  text-white bg-richblack-900'>
      {/* section 1 */}
      <section>
        <div className=' relative'>
            <header className=' bg-richblack-500  p-4 flex flex-col justify-center items-center text-3xl h-[300px] font-semibold'>
                Driving Innovation in Online Education for a 
                <Highlightedtext text={"Brighter Future"}/>
                <p className='text-lg w-[80%] font-thin  text-richblack-100'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </header>
            <div className='flex gap-x-3 mx-auto justify-center items-center '>
                <img src={BannerImage1}  className='w-[22%] absolute left-[150px] top-[250px]'/>
                <img src={BannerImage2} className='w-[22%] absolute left-[510px] top-[250px]'/>
                <img src={BannerImage3} className='w-[22%] absolute left-[870px] top-[250px]'/>
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className=' mt-[300px]'>
        <div className=' text-2xl font-semibold  flex justify-center items-center w-[95%]'>
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='flex flex-col w-[90%] mx-auto justify-center items-center mt-20'>
            {/* foudning story wala div */}
            <div className='flex justify-center  '>
                {/* founding story left box */}
                <div className='w-[50%] text-[16px] p-2 gap-2'>
                    <h1 className=' font-bold text-2xl text-pink-300 -pl-0'>Our Founding Story</h1>

                    <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                    <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                </div>
                {/* foudning story right box */}
                <div className='w-[30%] mt-10'>
                    <img  src={FoundingStory} />
                </div>
            </div>

            {/* vision and mission wala parent div */}
            <div className='flex mt-10 justify-center'>
                {/* left box */}
                <div className=' w-[40%] p-2'>
                    <h1 className=' text-pink-200  font-semibold text-xl my-5'>Our Vision</h1>
                    <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>

                {/* right box */}
                <div className=' w-[40%]'>
                    <h1 className=' text-blue-200  font-semibold text-xl my-5'>
                        Our Mission
                    </h1>
                    <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </div>
      </section>  

      {/* section 4 */}
      <StatsComponent/>  
      
      {/* section 5 */}
      <section className='mx-auto flex flex-col items-center justify-between gap-5 mb-[140px] w-[80%] h-fit'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      <section>
        <div>
            Reviews from other learners
            {/* <ReviewSlider /> */}
        </div>
      </section>

      <Footer/>

    </div>
  )
}

export default About

import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section className=' w-[30%] mx-auto my-10 bg-richblack-400 p-2'>
        <div>
            <div className='flex gap-x-5 justify-center '>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className=' border-r pr-2'>
                                <h1>
                                    {data.count}
                                </h1>
                                <h2>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent

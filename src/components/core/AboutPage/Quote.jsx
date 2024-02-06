import React from 'react'
import { Highlightedtext } from '../Homepage/Highlightedtext'

const Quote = () => {
  return (
    <div className=''>
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <Highlightedtext text={"combines technology"}/><span className='text-brown-500'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='text-brown-500'>
      {" "}
        unparalleled educational experience.
      </span>
    </div>
  )
}

export default Quote

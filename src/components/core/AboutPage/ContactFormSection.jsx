import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mx-auto border rounded-lg p-4 '>
      <h1 className=' text-2xl font-semibold  mx-auto ml-32 mb-4'>
        Get in Touch
      </h1>
      <p className=' mb-4 ml-4 font-semibold'>
        We'd love to here for you, Please fill out this form.
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection

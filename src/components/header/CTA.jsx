import React from 'react'
import cv from '../../assets/pdf/Oybek_cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download my CV</a>
        <a href='#about' className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CTA
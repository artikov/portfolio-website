import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/img/testimonial1.png'
import AVTR2 from '../../assets/img/testimonial2.png'
import AVTR3 from '../../assets/img/testimonial3.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials_data = [
  {
    avatar: AVTR1,
    name: 'George Karkanias, GIS, Inc',
    review: 'Excellent work in everyway!'
  },
  {
    avatar: AVTR2,
    name: 'Jillian Wyatt',
    review: 'Experienced developer, was very helpful for our team!'
  },
  {
    avatar: AVTR3,
    name: 'Annie Huang, AliBaba',
    review: 'He knows his job!'
  }
] 

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>What My Clients Say</h5>
    <h2>Testimonials</h2>

    <Swiper 
    modules={[Pagination]} 
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="container testimonials__container">
      {
        testimonials_data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials
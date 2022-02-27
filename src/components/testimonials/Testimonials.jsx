import React from 'react'
import './testimonials.css'
import AVT from '../../assets/me.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT,
    name: 'Zulhaditya',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde nam obcaecati dicta sit veniam amet, voluptatem excepturi inventore fugiat.' 
  },
  {
    avatar: AVT,
    name: 'Hapiz',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde nam obcaecati dicta sit veniam amet, voluptatem excepturi inventore fugiat.' 
  },
  {
    avatar: AVT,
    name: 'Adit',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde nam obcaecati dicta sit veniam amet, voluptatem excepturi inventore fugiat.' 
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar Client" />
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
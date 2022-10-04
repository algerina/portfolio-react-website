import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    avatar: AVTR1,
    name: "name1",
    review: "what ever what ever what ever what ever"
  },
  {
    avatar: AVTR2,
    name: "name2",
    review: "what ever what ever what ever what ever"
  },
  {
    avatar: AVTR3,
    name: "name3",
    review: "what ever what ever what ever what ever"
  },
  {
    avatar: AVTR4,
    name: "name4",
    review: "what ever what ever what ever what ever"
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials__container container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{ clickable;true }}

      >
        { 
       data.map(({avatar, name, review}, index) => {
        return (
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}  />
           
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>

        )
       })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
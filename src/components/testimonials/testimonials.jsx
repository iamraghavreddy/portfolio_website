import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.png'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Zinal Joshi</h5>
          <small className='client__review'>
            During his internship, Raghavendra has been pivotal to initiate and see through editing and animating videos. He has been a delight to work with all team members.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials
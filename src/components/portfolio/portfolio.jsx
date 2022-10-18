import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Xeniaverse Website</h3>
          <a href="https://www.xeniaverse.co.in/" className='btn btn-primary' target='_blank'>Have A Look</a>
        </article>
      </div>
    </section>
  )
}

export default portfolio
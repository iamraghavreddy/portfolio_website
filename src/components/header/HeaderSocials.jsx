import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/raghavendra-reddy-4501271b6/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/iamraghavreddy" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com/iamraghavreddy?igshid=YmMyMTA2M2Y=" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default headersocials
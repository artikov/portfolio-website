import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/artikov' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/artikov' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://stackoverflow.com/users/18007634/artikov' target='_blank' rel="noreferrer"><BsStackOverflow /></a>
    </div>
  )
}

export default HeaderSocials
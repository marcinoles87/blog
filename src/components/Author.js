import React from 'react'
import '../App.css'
import myFoto from '../img/myfoto.jpg'

function Author() {
  
  return (
    <div className='author-bio-container'>
      <h1> My Full Name</h1>
      <p> Little slogan</p>
      <img src={myFoto} alt='my-foto'></img>

      <div className='author-links'>
        <a href='#'>lnk1</a>
        <a href='#'>lnk1</a>
        <a href='#'>lnk1</a>
      </div>
    </div>
    
  )
}

export default Author
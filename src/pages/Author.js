import React from 'react'
import '../App.css'
import myFoto from '../img/myfoto.jpg'

function Author() {
  
  return (
    <div className='author-bio-container'>
      <img src={myFoto} alt='my-foto'></img>
      <h1> Marcin Oleś</h1>
      <h5> life , chill , be happy</h5>
      <p> Cześc , nazywam sie Marcin . 
        Jestem spokojnym , pracowitym i uśmiechnietym
        tata :) Każdego dnia czerpie z życia jak najwiecej
        nie zważajac na przeciwności losu zawsze staram
        się patrzeć pozytywnie na świat ! 
      </p>

      <div className='author-info'>

      </div>

      <div className='author-links'>
        <a href='#'><i class="fa-regular fa-envelope fa-xl"></i></a>
        <a href='#'><i class="fa-solid fa-square-phone fa-xl"></i></a>
      </div>
    </div>
    
  )
}

export default Author
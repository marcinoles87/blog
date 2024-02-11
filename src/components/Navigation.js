import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div className='nav-container'>
        <div className='nav-elements'>
            <ul className='nav-link'>

              <Link className='link-router' to={'/'}>Me</Link>
              <Link className='link-router' to={'/skills'}><li><a href=''>My Skills</a></li></Link>
              <Link className='link-router' to={'/hobby'}><li><a href=''>My Hobby</a></li></Link>
              <Link className='link-router' to={'/project'}><li><a href=''>My Projects</a></li></Link>
              <Link className='link-router' to={'/author'}><li><a href=''>About Me</a></li></Link>
              
            
                
                
                
                
               
            </ul>
        </div>
        </div>
  )
}

export default Navigation
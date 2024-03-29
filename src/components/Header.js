import React from 'react'
import img1 from '../img/wakacje.jpg';
import img2 from '../img/beach.jpg';
import img3 from '../img/mountain.jpg';
import '../App.css'

function  Header() {

    const news = [
        {
            info: "My Life",
            tag : 'lifestyle' ,
            date: '22-12-2024',
            img : img1 ,
        },

        {
            info: "My Hobby",
            tag : 'hobby' ,
            date: '22-12-2024',
            img : img2 ,
        },

        {
            info: "My Project ",
            tag : 'family',
            date: '22-12-2024',
            img : img3 ,
        }


    ]
    

  return (
    <div className='header-container'>
        <div className='header-elements'>
            {news.map( (item, index) => {
                return(
                    <div className='header-content' key={index} >
                        
                        <div className='header-content-info'>
                            <p className='header-tag'>{item.tag}</p>
                            <h3>{item.info}</h3>
                            <p className='header-date'>{item.date}</p>
                        </div>
                        
                        <img src={item.img} alt={item.date}></img>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default  Header

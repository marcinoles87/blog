import React from 'react'
import img1 from '../img/wakacje.jpg'
import '../App.css'

function  Header() {

    const news = [
        {
            info: "sssssssssssss",
            date: '22-12-2024',
            img : img1 ,
        },

        {
            info: "sssssssssssss",
            date: '22-12-2024',
            img : img1 ,
        },

        {
            info: "sssssssssssss",
            date: '22-12-2024',
            img : img1 ,
        }


    ]
    

  return (
    <div className='header-container'>
        <div className='header-elements'>
            {news.map( (item, index) => {
                return(
                    <div className='header-content' key={index} >
                        <h3>{item.info}</h3>
                        <p>{item.date}</p>
                        <img src={item.img} alt={item.date}></img>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default  Header

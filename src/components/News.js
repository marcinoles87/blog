import React from 'react'
import newsImg from '../img/newsImg.jpg'

function News({newsArray}) {
  console.log(newsArray)

  
 
  return (
    <>
   
    <div className='news-container'>
       <img src={newsImg} alt='news' className='news-img'></img>
      <h1>News from my Life</h1>
      {newsArray.map( (item) => {
        return(
          <div className='news-post'>
            <h1>{item.title}</h1>
            <h5>{item.date}</h5>
            <p>{item.news}</p>

          </div>
        )
      })}
    </div>

    </>
  )
}

export default News
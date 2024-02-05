import React from 'react'

function News({newsArray}) {
  console.log(newsArray)

  
 
  return (
    <div className='news-container'>
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
  )
}

export default News
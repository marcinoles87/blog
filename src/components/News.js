import React from 'react'

function News({news}) {
  return (
    <div className='news-container'>
      <h1>News from my Life</h1>
      {news.map( (item) => {
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
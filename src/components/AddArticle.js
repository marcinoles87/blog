import React from 'react';
import '../App.css';

function AddArticle({newsArray , setNewsArray}) {
     


    const addArticle = (e) => {

      const dataNow = new Date().toLocaleString()
      
      const val = 'dzis jest jutrem'
      const obj = { title: val , news : 'sss' , date: dataNow }
      
      newsArray.push(obj)
      setNewsArray(newsArray)
      console.log(newsArray)
    }

  return (
    <div className='addarticle-container'>
        <input placeholder='add Title' className='input-title'></input>
        <input placeholder='add text' className='input-text'></input>
        <button onClick={addArticle}>Add</button>
    </div>
  )
}

export default AddArticle
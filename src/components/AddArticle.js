import React from 'react';
import '../App.css';

function AddArticle({newsArray , setNewsArray}) {
     



    const addArticle = (e) => {

      const title = document.querySelector('.input-title').value;
      const text = document.querySelector('.input-text').value;
      const dataNow = new Date().toLocaleString();
      const obj = { title: title , news : text , date: dataNow }
      newsArray.push(obj)

      const upDateArray = [...newsArray]
      
      setNewsArray(upDateArray)

    
      
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
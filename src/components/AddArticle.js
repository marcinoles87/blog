import React from 'react';
import '../App.css';

function AddArticle({news , title , setTitle}) {
    

    const addArticle = () => {
      console.log(news)
      
    }
  return (
    <div className='addarticle-container'>
        <input placeholder='add Title'></input>
        <input placeholder='add text'></input>
        <button onClick={addArticle}>Add</button>
    </div>
  )
}

export default AddArticle
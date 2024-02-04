import React from 'react';
import '../App.css';

function AddArticle({news , title , setTitle}) {
     
  console.log(title)

    const addArticle = () => {
      console.log(news)
   
     
    }

    const handleOnChangeText = (e) =>{
      const val = e.target.value
      
    }
  return (
    <div className='addarticle-container'>
        <input placeholder='add Title' className='input-title' onChange={handleOnChangeText}></input>
        <input placeholder='add text' className='input-text'></input>
        <button onClick={addArticle}>Add</button>
    </div>
  )
}

export default AddArticle
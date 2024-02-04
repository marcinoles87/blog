import React from 'react';
import '../App.css';

function AddArticle({news , setNews , title , setTitle}) {
     
  console.log(title)

    const addArticle = (e) => {

      const dataNow = new Date().toLocaleString()
      console.log(news)
      const val = 'dzis jest jutrem'
      const obj = { title: val , news : 'sss' , date: dataNow }
      
      const newArr = news.push(obj)
      console.log(newArr)
      
      
     
    }

    const handleOnChangeText = (e , index) =>{
    
      
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
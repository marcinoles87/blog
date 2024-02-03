import React from 'react';
import '../App.css';

function AddArticle({news}) {
    console.log(news)
  return (
    <div className='addarticle-container'>
        <input placeholder='add Title'></input>
        <input placeholder='add text'></input>
        <button>Add</button>
    </div>
  )
}

export default AddArticle
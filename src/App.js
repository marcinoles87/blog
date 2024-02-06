
import { useState } from 'react';
import './App.css';
import AddArticle from './components/AddArticle';
import Author from './components/Author';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';

function App() {

  const dataNow = new Date().toLocaleString()

  
  const newsOld = [

    {
      title: "nowy poczatek" ,
      news : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente neque eos rem provident repellendus id ex commodi placeat, autem doloremque esse aspernatur rerum nemo, illum voluptates. Esse aliquid fugit error " ,
      date : dataNow , 
    },

    {
      title: "nowy poczatek" ,
      news : "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro explicabo nisi sapiente recusandae. Repellat, optio non? Magni excepturi quisquam est provident ex delectus, totam quae modi minima nostrum, vero error Esse sunt optio et sint, qui quia obcaecati dolore delectus debitis aut voluptates reiciendis accusantium laboriosam in consequatur doloremque minima minus nemo illum veritatis non nam id maiores iusto! QuidemCulpa omnis corporis quia itaque, asperiores incidunt nostrum sint recusandae facilis deserunt eum labore aperiam quaerat excepturi suscipit minus dolor laboriosam a accusamus non optio nihil quibusdam. Minima, recusandae voluptate!Eveniet sequi ullam, cum iste quia non repellat hic error, alias nam odio architecto dolor enim velit consequatur quidem amet! Autem dignissimos iure hic officia provident voluptatem fugiat tenetur quod! " ,
      date : dataNow , 
    },

    {
      title: "nowy poczatek" ,
      news : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      date : dataNow , 
    }


  ]
  


  let [newsArray , setNewsArray] = useState(newsOld);
 

 console.log(newsArray)
 

  return (
    <div className="App">
      <Main></Main>
      <Navigation></Navigation>
      <Header></Header>
      <AddArticle newsArray={newsArray} setNewsArray={setNewsArray}></AddArticle>

      <div className='article-container'>
          <News newsArray={newsArray} ></News>
          <Author></Author>
      </div>
      
    </div>
  );
}

export default App;

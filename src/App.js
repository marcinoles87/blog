
import { useState } from 'react';
import './App.css';
import AddArticle from './components/AddArticle';
import Author from './components/Author';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import Hobby from './pages/Hobby';
import Project from './pages/Project';

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
    } ,

    
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

      <div className='article-container'>
          <Routes>
            
              <Route path='/' element={<News newsArray={newsArray} ></News>}/>
              <Route path='/skills' element={<Skills></Skills>}/>
              <Route path='/hobby' element={<Hobby></Hobby>}/>
              <Route path='/project' element={<Project></Project>}/>
              <Route path='/author' element={<Author></Author>}/>

        
          </Routes>

         
      </div>

      <AddArticle newsArray={newsArray} setNewsArray={setNewsArray}></AddArticle>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

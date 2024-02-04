
import { useState } from 'react';
import './App.css';
import AddArticle from './components/AddArticle';
import Article from './components/Article';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';

function App() {

  const dataNow = new Date().toLocaleString()

  
  const newsOld = [

    {
      title: "nowy poczatek" ,
      news : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      date : dataNow , 
    },

    {
      title: "nowy poczatek" ,
      news : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      date : dataNow , 
    },

    {
      title: "nowy poczatek" ,
      news : 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ' ,
      date : dataNow , 
    }


  ]

  const [title , setTitle] = useState('eeee');
  const [text , setText] = useState('');
  const [newsArray , setNewsArray] = useState(newsOld);
  const [news , setNews] = useState([])

 console.log(newsArray)
 

  return (
    <div className="App">
      <Main></Main>
      <Navigation></Navigation>
      <Header></Header>
      <AddArticle news={news}></AddArticle>

      <div className='article-container'>
          <News news={news} ></News>
          <Article news={news} setNews={setNews} title={title} setTitle={setTitle}></Article>
      </div>
      
    </div>
  );
}

export default App;

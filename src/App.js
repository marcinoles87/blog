
import { useState } from 'react';
import './App.css';
import AddArticle from './components/AddArticle';
import Article from './components/Article';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';

function App() {

  const [title , setTitle] = useState();
  const [text , setText] = useState();
  const [newsArray , setNewsArray] = useState([]);

  const dataNow = new Date().toLocaleString()
  console.log(dataNow)

  const news = [

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
  return (
    <div className="App">
      <Main></Main>
      <Navigation></Navigation>
      <Header></Header>
      <AddArticle news={news}></AddArticle>

      <div className='article-container'>
          <News news={news} ></News>
          <Article news={news} title={title} setTitle={setTitle}></Article>
      </div>
      
    </div>
  );
}

export default App;

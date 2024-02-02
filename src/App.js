
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';

function App() {

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
      <div className='article-container'>
        <News news={news}></News>
        <Article></Article>
      </div>
      
    </div>
  );
}

export default App;

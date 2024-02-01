
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Header></Header>
      <Navigation></Navigation>
      <News></News>
      <Article></Article>
    </div>
  );
}

export default App;

import './App.scss';
import Header from './components/Header/header';
import Main from './components/main/main'
import ellipse1 from './assets/img/Ellipse_23.svg'
import SectionStudy from './components/SectionStudy/SectionStudy'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <img className='bgc-logo' src={ellipse1} alt="logo"></img>
      <Header className="">
      </Header>
      <Main>
      </Main>
      <SectionStudy>
      </SectionStudy>
      <Footer>
      </Footer>

    </div>
  );
}

export default App;

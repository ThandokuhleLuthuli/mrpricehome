import logo from './logo.svg';
import './main.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Footer/>
    </div>
  );
}

export default App;

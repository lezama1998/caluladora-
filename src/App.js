import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Calculadora from './pages/calculadora/calculadora';

function App() {
  return (
    <>
      <Header/>
      <Router>
          <Routes>
              <Route exact path= '/' element={<Home/>}/>
              <Route  path= '/calculadora' element={<Calculadora/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;

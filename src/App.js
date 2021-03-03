  
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Logotipo from './pages/Logotipo';
import Tipografia from './pages/Tipografia';
import Color from './pages/Color';
import Familia from './pages/Familia';



function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/logotipo' component={Logotipo}/>
        <Route path='/tipografia' component={Tipografia}/>
        <Route path='/color' component={Color}/>
        <Route path='/familia' component={Familia}/>


      </Switch>
    </Router>
    </>
  );
}

export default App;

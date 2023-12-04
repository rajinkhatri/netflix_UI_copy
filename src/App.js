import './App.css';
// import Home from './components/Homepage';
import Mainpage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Notfound from './components/Notfound';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' Component={Mainpage} />
      <Route path='/signin' Component={Signin} />
      <Route  path='*' Component={Notfound} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import CardDetail from './components/CardDetail/CardDetail';
import Create from './components/Create/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/home" element={ <Home /> } /> 
        <Route path="/pokemons/:id" element={ <CardDetail/> } />
        <Route path="/pokemons/create" element={ <Create /> } />  
      </Routes>
    </div>
  );
}
 
export default App;
import './App.css';
import Calculator from './components/Calculator';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Musicplayer from './components/musicplayer';
import Digitalclok from './components/Digitalclock';
import Weather from './components/Weather';

function App() {
  return (
    <>
      <Navbar/>
      <br></br>
      <Routes>
        <Route path='/Calculator' element={<Calculator/>}/>
        <Route path='/Musicplayer' element={<Musicplayer/>}/>
        <Route path='/Digitalclock' element={<Digitalclok/>}/>
        <Route path='/Weather' element={<Weather/>}/>
      </Routes>
    </>
  );
}

export default App;

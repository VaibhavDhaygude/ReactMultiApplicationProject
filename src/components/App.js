import './App.css';
import Calculator from './components/Calculator';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/Calculator' element={<Calculator/>}/>
        {/* <Route path='/Weather' element={<Weather/>}/> */}
      </Routes>
    </>
  );
}

export default App;

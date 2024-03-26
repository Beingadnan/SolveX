import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './home/Home';
import Admission from './admission/Admission';
import Login from './login/Login';


function App() {
  return (
    <div className='main'>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admission' element={<Admission/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;

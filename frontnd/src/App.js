import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
    </Routes>
   </Router>
    </div>
  );
}

export default App;

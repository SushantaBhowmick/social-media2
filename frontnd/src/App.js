import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/profile' element={<Profile/>} />
    </Routes>
   </Router>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from "react-router-dom";
// import Login from './components/auth/Login';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const token = localStorage.getItem("token");
  const HomePage = token ? <Home/> : <Login/>
  return (
    <Routes>
      <Route path='/' element={HomePage} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;

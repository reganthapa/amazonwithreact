import { Routes, Route } from 'react-router-dom';
import  Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from  './pages/Signup';
import Breakpoint from './pages/Breakpoint';
import Deals from './pages/Deals';
import Cart from './pages/Cart';


import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/breakpoint" element={<Breakpoint />}></Route>   
      <Route path="/deals" element={<Deals/>}></Route>  
      <Route path="/cart"  element={<Cart />}></Route>

    </Routes>
    </>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './componets/Footer/Footer';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Post from './componets/Post/Post';
import Profile from './componets/Profile/Profile';
import Register from './componets/Register/Register';
import SideBar from './componets/SideBar/SideBar';

function App() {


  return (
    <>
    <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='Post/:id' element={<Post/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App

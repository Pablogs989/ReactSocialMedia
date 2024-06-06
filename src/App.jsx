
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './componets/Footer/Footer';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Profile from './componets/Profile/Profile';
import Register from './componets/Register/Register';
import SideBar from './componets/SideBar/SideBar';
import PostDetail from './componets/PostDetail/PostDetail';
import Following from './componets/Following/Following';
import GetUsers from './componets/GetUsers/GetUsers';

function App() {


  return (
    <>
    <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<GetUsers/>}/>
        <Route path="/following" element={<Following/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App

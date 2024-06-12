
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './componets/Footer/Footer';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import SideBar from './componets/SideBar/SideBar';
import Following from './componets/Following/Following';
import CreatePost from './componets/CreatePost/CreatePost';
import GetUsers from './componets/GetUsers/GetUsers';
import LoggedUserProfile from './componets/LoggedUserProfile/LoggedUserProfile';
import GeneralUserProfile from './componets/GeneralUserProfile/GeneralUserProfile';
import NotFound from './guards/NotFound';
import PrivateZone from './guards/PrivateZone';

import PostDetail from './componets/PostDetail/PostDetail';
import Post from './componets/Post/Post';
import Posts from './componets/Posts/Posts';
function App() {


  return (
    <>
    <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/following" element={<Following/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/:id" element={<GeneralUserProfile/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<PrivateZone><LoggedUserProfile/></PrivateZone>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App

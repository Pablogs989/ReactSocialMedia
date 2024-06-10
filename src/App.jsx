
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
import Comment from './componets/Comment/Comment';
import PostDetail from './componets/PostDetail/PostDetail';
function App() {


  return (
    <>
    <BrowserRouter>
      <SideBar/>
      <Routes>
        <Route path="/comment/:id" element={<Comment/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<GetUsers/>}/>
        <Route path="/following" element={<Following/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user/:id" element={<GeneralUserProfile/>}/>
        <Route path="/profile" element={<LoggedUserProfile/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App

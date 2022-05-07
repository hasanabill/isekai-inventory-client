import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Logins/LogIn/Login';
import Home from './components/Pages/Home/Home';
import ManageInv from './components/Pages/ManageInv/ManageInv';
import MyItems from './components/Pages/MyItems/MyItems';
import SignUp from './components/Logins/SignUp/SignUp';
import Blogs from './components/Pages/Blogs/Blogs';
import ItemDetails from './components/Pages/ItemDetails/ItemDetails';
import RequiredAuth from './components/Logins/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInv></ManageInv>}></Route>
        <Route path='/inventory/:itemId' element={<RequiredAuth><ItemDetails></ItemDetails></RequiredAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

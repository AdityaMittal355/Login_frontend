import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={user && user._id ? <Home newuser = {user} setLoginUser = {setLoginUser}/> : <Login setLoginUser = {setLoginUser}/>} />
        <Route path="/login" element={<Login setLoginUser = {setLoginUser}/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
    )
  )



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;

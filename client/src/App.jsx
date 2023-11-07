import React from "react";
import { BrowserRouter, Route, Routes , useLocation,redirect} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./AdminPages/Dashboard";
import AdminHeader from "./Components/AdminHeader";
import Users from "./AdminPages/Users";
import AdminPrivateRoute from "./AdminPages/AdminPrivateRoute";
import AdminSignIn from "./AdminPages/AdminSignIn";

const App = () => {
   const location = useLocation()
   const isAdminSection =  location.pathname.startsWith('/admin')
  return (
    <>
      {isAdminSection  ? <AdminHeader /> : <Header /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route element={<PrivateRoute/>} >
           <Route path="/profile" element={<Profile />} />
        </Route>
      
        <Route path="/admin"  element={<AdminSignIn />} />
        <Route element={<AdminPrivateRoute />} >
             <Route path="/admin/users"   element={<Users />} />
        </Route>
        <Route path="/admin/dashboard"  element={<Dashboard />} />
      </Routes>
    
           {/* <Route path="/admin"  element={<AdminHeader />} >
          <Route element={<AdminPrivateRoute />} >
             <Route path="/admin/users"   element={<Users />} />
          </Route>
          <Route path="/admin/signin"  element={<AdminSignIn />} />
          <Route path="/admin/signout"  element={<Dashboard />} />
        </Route> */}
    
      </>
  );
};

export default App;

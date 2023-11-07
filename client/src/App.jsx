import React from "react";
import { BrowserRouter, Route, Routes , useLocation} from "react-router-dom";
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

const App = () => {
   const location = useLocation()
   const isAdminSection =  location.pathname.startsWith('/admin')
console.log(isAdminSection);
  return (
    <>
      {isAdminSection === false && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route element={<PrivateRoute/>} >
           <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/admin"  element={<AdminHeader />} >
          <Route path="/admin/users"   element={<Users />} />
          <Route path="/admin/admin-sign-in"  element={<Dashboard />} />
          <Route path="/admin/admin-sign-out"  element={<Dashboard />} />
        </Route>

      </Routes>
    
          
    
      </>
  );
};

export default App;

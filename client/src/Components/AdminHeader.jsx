import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSignIn from "../AdminPages/AdminSignIn";
import { useSelector,useDispatch } from "react-redux";
import { signOut } from "../redux/admin/adminSlice";
const AdminHeader = () => {
  const {adminStatus} = useSelector((state)=>state.admin);
  const dispatch = useDispatch()
 
  const handleSignOut =async()=>{
    try {
      await fetch('/api/auth/admin/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-header">
      <div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
          <h1 className="font-bold">Admin Dashboard</h1>
          <ul className="flex gap-4">
            <Link to="/admin/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/admin/users">
              <li>Users</li>
            </Link>
            {adminStatus ? (
              <li onClick={handleSignOut} className="cursor-pointer">Sign Out</li>
           ) : (<Link to="/admin">
              <li>Sign In</li>
            </Link>)}
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default AdminHeader;

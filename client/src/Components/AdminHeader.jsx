import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSignIn from "../AdminPages/AdminSignIn";
const AdminHeader = () => {
  let currentUser = false;
  return (
    <div className="main-header">
      {currentUser ? (<div className="bg-slate-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
          <h1 className="font-bold">Admin Dashboard</h1>
          <ul className="flex gap-4">
            <Link to="/dashborad">
              <li>Dashboard</li>
            </Link>
            <Link to="/admin/users">
              <li>Users</li>
            </Link>
            <Link to="/admin/sign-out">
              <li>Sign In</li>
            </Link>
          </ul>
        </div>
      </div>) : ''}
      {
        currentUser ? <div>
        <Outlet />
      </div> : <AdminSignIn />
      }
      
    </div>
  );
};

export default AdminHeader;

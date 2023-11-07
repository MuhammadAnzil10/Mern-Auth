import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet,Navigate} from 'react-router-dom'

 const AdminPrivateRoute=()=> {

  const {adminStatus} =useSelector(state => state.admin)
  return adminStatus ? <Outlet /> : <Navigate to='/admin'/>
}

export default AdminPrivateRoute;
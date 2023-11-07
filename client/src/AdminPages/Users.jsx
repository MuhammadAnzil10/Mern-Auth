import React from 'react'
import Table from './Table';


import { useEffect,useState,useMemo,memo } from 'react';
 const Users = ()=> {
  const [users , setUsers] = useState([])
  
 useEffect(()=>{
    
  getAllusers()
 },[])

 const getAllusers =()=>{
 fetch('/api/admin/users') .then((res)=>res.json()).then(data=>{
  setUsers(data)
  })

  
} 
  return (
    <div className=''>
      <Table usersData ={users}/>
    </div>
  )
}


export default Users;
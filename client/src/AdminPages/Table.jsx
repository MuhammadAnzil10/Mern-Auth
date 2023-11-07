import { set } from "mongoose";
import React,{useState,useEffect} from "react";


export default function Table({usersData}) {
  const [search,setSearch] = useState('')
  const [filterUsers , setFilterUsers] = useState([])

  useEffect(()=>{
    setFilterUsers(usersData)
  },[usersData])

  const handleFilter =()=>{

    const filtered = usersData.filter((user)=>{
      const name = user.username.toLowerCase();
      const email = user.email.toLowerCase();
      const query = search.toLowerCase();
      return name.includes(query) || email.includes(query);
  
    })
  
    setFilterUsers(filtered)
  }
 
  return (
    
    <div className="container mx-auto p-4 pl-10 ">
      <h1 className="text-2xl font-semibold mb-4 pl-4">User Management</h1>
      <div className="flex items-center">
            <div className="flex border border-purple-200 rounded mb-8 mt-5">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded "
                onClick={handleFilter}>
                    Search
                </button>
            </div>
        </div>



      
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Username
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {
            filterUsers.map((user , index)=>{

          return ( <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap h-24 w-24 self-center cursor-pointer rounded-full object-cover  mt-2">
                <img className="h-10 w-10 rounded-full object-fill"
                  src={user.profilePicture}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="bg-green-500 rounded-md p-1 mx-1">Edit</button>
               <button className="bg-red-600 rounded-md p-1">Delete</button></td>
            </tr>)
            })
          }
         
        </tbody>
      </table>
    </div>
  );
}

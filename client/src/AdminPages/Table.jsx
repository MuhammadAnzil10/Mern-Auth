import React from "react";

export default function Table({usersData}) {
  console.log(usersData);
  return (
    
    <div className="container mx-auto p-4 pl-10 ">
      <h1 className="text-2xl font-semibold mb-4 pl-4">User Management</h1>
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
            usersData.map((user , index)=>{

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

import React from "react";
import Table from "./Table";

import { useEffect, useState, useMemo, memo } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [userDeleted, setUserDeleted] = useState(false);

  useEffect(() => {
    getAllusers();
  }, [userDeleted]);

  const getAllusers = () => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div className="">
      <Table
        usersData={users}
        userDeleted={userDeleted}
        setUserDeleted={setUserDeleted}
      />
    </div>
  );
};

export default Users;

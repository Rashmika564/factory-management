import React, { Component } from "react";
const UserRolesTable = ({ filteredItems}) => {
  return (
    <table className="table table-bordered table-sm m-2">
      <thead>
        <tr className="table-secondary">
          <th scope="col">Id</th>
          <th scope="col">User Role</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((i) => (
          <tr
            key={i._id}
            className={
              "table-succes table-primary"
            }
          >
            <td>{i.userRoleNo}</td>
            <td>{i.userRole}</td>
            <td>{i.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserRolesTable;
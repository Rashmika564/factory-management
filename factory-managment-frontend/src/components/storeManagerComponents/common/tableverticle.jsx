import React, { Component } from "react";

const TableVertilcle = ({ records, handleDelete, onSet }) => {
  return (
    <div>
      {records.map((r) => (
        <table key={r._id} className="table table-bordered table-sm m-2">
          <tbody key={r._id}>
            <tr style={{ backgroundColor: "#2461A7", color: "white" }}>
              <th scope="col">Record</th>
              <th scope="col">details</th>
            </tr>

            <tr>
              <td>Item Code</td>
              <td>{r.iCode}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{r.iType}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{r.iCategory}</td>
            </tr>
            <tr>
              <td>quantity</td>
              <td>{r.iQuantity}</td>
            </tr>
            <tr>
              <td>Supplier Name</td>
              <td>{r.iSupplier}</td>
            </tr>
            <tr>
              <td>Received date</td>
              <td>{r.iAddedDate}</td>
            </tr>

            <tr className="table-primary">
              <th scope="col">Actions</th>
              <td>
                <button
                  style={{ backgroundColor: "#2461A7", color: "white" }}
                  className="btn-sm mx-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onSet(r)}
                  style={{ backgroundColor: "#BA0D32 ", color: "white" }}
                  className="btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default TableVertilcle;
import React, { Component } from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group my-2">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <div className="alert alert-danger" style={{ padding: 3 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;

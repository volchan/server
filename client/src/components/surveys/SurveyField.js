import React from "react";

export default ({ input, label, meta }) => {
  const { error, touched } = meta;
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};

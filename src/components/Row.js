import React from "react";

export const Row = (props) => {
  return (
    <tr>
      <td>1</td>
      <td>{props.category}</td>
      <td>{props.subCategory}</td>
      <td>{props.name}</td>
      <td>{props.types}</td>
      <td>{props.purchase}</td>
      <td>{props.sale}</td>
    </tr>
  );
};

import React from "react";
import { Link } from "react-router-dom";

function Entry({ name, lastname, email, mobile, project, clId }) {
  async function deleteHandler(id) {
    const result = await fetch(`http://localhost:4000/v1/deleteclient/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td>{project}</td>
        <td>
          <Link to={`/editclient/${clId}`}>Edit</Link>
          <button onClick={() => deleteHandler(clId)}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default Entry;

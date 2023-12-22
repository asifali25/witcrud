import React, { useEffect, useState } from "react";
import Entry from "./Entry";

function Entries() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/getclient")
      .then((response) => response.json())
      .then((data) => {
        setClient(data.data);
      });
  }, [client]);

  const clientTable = client.map((data) => {
    return (
      <Entry
        key={data._id}
        name={data.name}
        lastname={data.lastname}
        email={data.email}
        mobile={data.mobile}
        project={data.project}
        clId={data._id}
      ></Entry>
    );
  });

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>{clientTable}</tbody>
        </table>
      </div>
    </>
  );
}

export default Entries;

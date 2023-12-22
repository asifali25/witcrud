import React, { useEffect, useState } from "react";
import Styles from "./Form.module.css";
import { useParams } from "react-router-dom";

function EditForm() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");
  const params = useParams();

  function nameHandler(e) {
    setName(e.target.value);
  }

  function LastHandler(e) {
    setLastName(e.target.value);
  }

  function EmailHandler(e) {
    setEmail(e.target.value);
  }

  function MobileHandler(e) {
    setMobile(e.target.value);
  }

  function ProjectHandler(e) {
    setProject(e.target.value);
  }

  useEffect(() => {
    async function getOneClient() {
      try {
        let result = await fetch(
          `http://localhost:4000/v1/getoneclient/${params.id}`
        );

        result = await result.json();
        setName(result.data.name);
        setLastName(result.data.lastname);
        setEmail(result.data.email);
        setMobile(result.data.mobile);
        setProject(result.data.project);
      } catch (err) {
        console.log(err);
      }
    }

    getOneClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function SubmitHandler(e) {
    e.preventDefault();

    try {
      const result = await fetch(
        `http://localhost:4000/v1/editclient/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name,
            lastname,
            email,
            mobile,
            project,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form className={Styles.form} onSubmit={SubmitHandler}>
        <h1>Create Client</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          onChange={nameHandler}
          value={name}
        ></input>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          onChange={LastHandler}
          value={lastname}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={EmailHandler}
          value={email}
        ></input>
        <label htmlFor="mobile">Mobile No.</label>
        <input
          type="text"
          id="mobile"
          placeholder="Mobile"
          onChange={MobileHandler}
          value={mobile}
        ></input>
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          placeholder="Project"
          onChange={ProjectHandler}
          value={project}
        ></input>
        <button>Update Client</button>
      </form>
    </>
  );
}

export default EditForm;

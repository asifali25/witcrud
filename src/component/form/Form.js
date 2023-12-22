import React, { useState } from "react";
import Styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");

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

  async function SubmitHandler(e) {
    e.preventDefault();
    console.log(name, lastname, email, mobile, project);

    try {
      const result = await fetch("http://localhost:4000/v1/createproject", {
        method: "POST",
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
      });

      console.log(result);
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
        <button>Create Client</button>
      </form>
    </>
  );
}

export default Form;

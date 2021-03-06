import React from "react";
import { useState } from "react";
import validateEmail from "../../utils/emailValidation";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [err, setErr] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name ==="email") {
      if (!validateEmail(value)) {
        setErr('Please enter valid email.') 
      } else {
        setErr('')
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    Object.values(form).forEach(val => {
        if (val === "") {
           return alert('You must enter all fields')
        }
    })


    setForm({
        ...form,
        name: "",
        email: "",
        message: "",
    })
    
  }

  return (
    <div className="h-100 contact">
        <h1 className="text-white mb-5 ContactMe">You can Contact Me using the following form!</h1>
      <form onSubmit={handleSubmit} className="row justify-content-center form">
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="input"

        ></input>

        <div className="text-white">{err}</div>

<input
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="input"
        ></input>

{/* <input
          placeholder="Message"
          name="message"
          type="textarea"
          value={form.message}
          onChange={handleChange}
          className="textarea"
        ></input> */}

        <textarea 
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="input textarea"
        rows={4}
        cols={50}
        >
          
        </textarea>

        <button
        type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

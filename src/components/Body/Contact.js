import React from "react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

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
    <div className="h-100">
        <h1 className="text-white mb-5">You can Contact Me using the following form!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        ></input>

<input
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        ></input>

<input
          placeholder="Message"
          name="message"
          type="text"
          value={form.message}
          onChange={handleChange}
        ></input>

        <button
        type="submit"
        >Submit</button>
      </form>
    </div>
  );
}

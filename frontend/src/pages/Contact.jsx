import React, { useState } from "react";
import "./css/Contact.css";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [status, setStatus] = useState("Send");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      text: text,
      subject: subject
    };

    console.log(details);

    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="text-fields">
        <TextField
          fullWidth
          required
          id="name"
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          fullWidth
          required
          id="email"
          label="E-mail"
          value={email}
          onChange={handleChangeEmail}
        />
        <FormControl required fullWidth>
          <InputLabel id="subject">Subject</InputLabel>
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={subject}
            label="Subject"
            onChange={handleChangeSubject}
          >
            <MenuItem value="Job offer">Job offer</MenuItem>
            <MenuItem value="Cooperation">Cooperation</MenuItem>
            <MenuItem value="Assessment">Assessment</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="text"
          label="Text"
          required
          multiline
          rows={5}
          value={text}
          onChange={handleChangeText}
        />
        <button
          variant="outlined"
          type="submit"
          disabled={
            !(
              email.includes("@") &&
              email.includes(".") &&
              name &&
              subject &&
              text
            )
          }
        >
          {status}
        </button>
      </form>
    </div>
  );
}

export default Contact;

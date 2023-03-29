import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Contact.css";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import loaderAnimation from "../imgs/circle_loading.gif";
import emailSent from "../imgs/email_sent.png";

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

  const form = useRef();

  /* useEffect(() => {
  if (setStatus("Email sent!")) {
    setTimeout(() => redirect("/"), 3000)
  }
}, []) */

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_u86b3f4",
        "template_7620jp2",
        form.current,
        "z0T9_CPBpXgxqsiRc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Sent");
          setEmail("");
          setName("");
          setSubject("");
          setText("");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <h1>Contact</h1>
      {status === "Send" ? (
        <form ref={form} onSubmit={handleSubmit} className="text-fields">
          <TextField
            fullWidth
            required
            id="name"
            name="name"
            label="Name"
            value={name}
            onChange={handleChangeName}
          />
          <TextField
            fullWidth
            required
            id="email"
            name="email"
            label="E-mail"
            value={email}
            onChange={handleChangeEmail}
          />
          <FormControl required fullWidth>
            <InputLabel id="subject-input">Subject</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              name="subject"
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
            name="text"
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
      ) : status === "Sending..." ? (
        <div className="loader">
          <img src={loaderAnimation} alt="loading" />
        </div>
      ) : (
        <div className="loader">
          <img src={emailSent} alt="sent" />
          <h1>email sent!</h1>
        </div>
      )}
    </div>
  );
}

export default Contact;

import React from "react";
import "./css/Contact.css";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

function Contact() {
  const [subject, setSubject] = React.useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <form className="text-fields">
        <TextField fullWidth required id="outlined-required" label="Name" />
        <TextField fullWidth required id="outlined-required" label="E-mail" />
        <FormControl required fullWidth>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            onChange={handleChange}
          >
            <MenuItem value="Job offer">Job offer</MenuItem>
            <MenuItem value="Cooperation">Cooperation</MenuItem>
            <MenuItem value="Assessment">Assessment</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Text"
          required
          multiline
          rows={5}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;

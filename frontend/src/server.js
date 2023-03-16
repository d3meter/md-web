const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mark.demeter3@gmail.com",
    pass: "zhumuioxgxaetszf",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const text = req.body.text;
  const mail = {
    from: name,
    to: "mark.demeter3@gmail.com",
    subject: subject,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Text: ${text}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

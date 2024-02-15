const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server is Runing"));

const contactEmail = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "davidlam_1991@hotmail.com",
    pass: "gxgpycjsifsnjcht",
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
  const name = req.body.fullName;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "davidlam_1991@hotmail.com",
    subject: `From Portfolio - ${subject}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

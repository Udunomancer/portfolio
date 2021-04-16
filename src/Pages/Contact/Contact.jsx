// import default React components
import React, { useState } from "react";
// import Material-UI components
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import Material-UI Styling
import useStyles from "../../Utils/Styles/UniversalStyles";
// import emailJS package
import * as emailjs from "emailjs-com";
import resume from "../../Assets/Resume.pdf";

function Contact() {
  const classes = useStyles();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  
    let templateParams = {
      from_name: message.name,
      from_email: message.email,
      to_name: "Kyle",
      subject: message.subject,
      message: message.message,
    }

    emailjs.send(
      "service_m4jzv5n",
      "template_7aq6hjl",
      templateParams,
      "user_8aUtJJm2xTXAI6QnyUFCr"
    );

    resetForm();
  }

  function handleChange(param, value) {
    setMessage({
      ...message,
      [param]: value,
    });
  }

  function resetForm() {
    setMessage({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <Paper>
      <form noValidate autoComplete="off">
        <Grid container justify="center" spacing={1}>
          <Grid item xs={6}>
            <TextField
              id="name"
              label="Name"
              value={message.name}
              variant="filled"
              onChange={(e) => {
                handleChange(e.target.id, e.target.value);
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              label="Email"
              value={message.email}
              variant="filled"
              onChange={(e) => {
                handleChange(e.target.id, e.target.value);
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="subject"
              label="Subject"
              value={message.subject}
              variant="filled"
              onChange={(e) => {
                handleChange(e.target.id, e.target.value);
              }}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              value={message.message}
              variant="filled"
              onChange={(e) => {
                handleChange(e.target.id, e.target.value);
              }}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          className={classes.button_contained}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </Paper>
  );
}

export default Contact;

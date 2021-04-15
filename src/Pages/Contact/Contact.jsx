// import default React components
import React, { useState } from "react";
// import Material-UI components
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// import emailJS package
import * as emailjs from "emailjs-com";
import resume from "../../Assets/Resume.pdf";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
  })

  function handleSubmit(e) {
    e.preventDefault();

    let templateParams = {
      from_name: message.email,
      to_name: "kyle717+portfolio@gmail.com",
      subject: message.subject,
      message_html: message.message,
    }

    emailjs.send(
      "gmail",
      "template_7aq6hjl",
      templateParams,
      "user_8aUtJJm2xTXAI6QnyUFCr"
    );
  }

  function handleChange(param, value) {
    setMessage({
      ...message,
      [param]: value
    })
  }

  function resetForm() {
    setMessage({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  // function handleInputChange(event) {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setMessage({...message, [name]: value});
  //     setMessage({...message, href: `mailto:kyle717@gmail.com?subject=${message.subject}&body=${message.body}`})
  // }

  return (
    <Paper>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Message me directly</Typography>
        </Grid>
        <form noValidate autoComplete="off" style={{ width: "100%" }}>
          <Grid container item xs={12}>
            <Grid container item xs={4}>
              <Grid item xs={12}>
                <TextField id="name" label="Name" value={message.name} onChange={(e) => {handleChange(e.target.id, e.target.value)}} required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="email" label="Email" value={message.email} onChange={(e) => {handleChange(e.target.id, e.target.value)}} required fullWidth />
              </Grid>
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={12}>
                <TextField id="subject" label="Subject" value={message.subject} onChange={(e) => {handleChange(e.target.id, e.target.value)}} required fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="message" label="Message" value={message.message} onChange={(e) => {handleChange(e.target.id, e.target.value)}} required fullWidth />
              </Grid>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <Typography>View my GitHub/LinkedIn</Typography>
          <Divider />
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography>GitHub:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>LinkedIn:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Resume:</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Phone:</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // <div id="contact-page" className="container pt-2">
    //     <div className="row">
    //         <div id="contact-div" className="col-md-9 py-3 mx-2">
    //             <div className="row mx-2">
    //                 <div className="col-sm-12">
    //                     <h1 className="border-bottom py-3"><strong>Contact</strong></h1>
    //                 </div>
    //             </div>
    //             <div className="row m-2 py-2">
    //                 <div className="col-sm-6 border-right">
    //                     <p><strong>GitHub: </strong><br></br><a href="https://github.com/Udunomancer" target="_blank" rel="noreferrer">github.com/Udunomancer</a></p>
    //                     <p><strong>LinkedIn: </strong><br></br><a href="https://www.linkedin.com/in/kyle-chriscoe/" target="_blank" rel="noreferrer">linkedin.com/in/kyle-chriscoe</a></p>
    //                     <p><strong>Resume: </strong><br></br><a href={resume} target="_blank" rel="noreferrer">Click Here</a></p>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <p><strong>Email: </strong><br></br><a href="mailto:kyle717@gmail.com">kyle717@gmail.com</a></p>
    //                     <p><strong>Phone: </strong><br></br>(404) 725-3435</p>
    //                 </div>
    //                 <div className="col-sm-8">
    //                     <form>
    //                         <h5>Email me!</h5>
    //                         <div className="form-group row">
    //                             <label htmlFor="subject" className="col-sm-2 col-form-label">Subject</label>
    //                             <div className="col-sm-10">
    //                                 <input type="text" className="form-control" id="subject" name="subject" value={message.subject} onChange={handleInputChange} placeholder="Your Message Subject"></input>
    //                             </div>
    //                         </div>
    //                         <div className="form-group row">
    //                             <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
    //                             <div className="col-sm-10">
    //                                 <textarea className="form-control" id="message" name="body" rows="4" placeholder="Your Message Body" value={message.body} onChange={handleInputChange}></textarea>
    //                             </div>
    //                         </div>
    //                         <div className="form-group row">
    //                             <div className="col-sm-2"></div>
    //                             <div className="col-sm-10">
    //                                 <button type="submit" className="btn btn-primary">Message Me!</button>
    //                             </div>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    // </div>
  );
}

export default Contact;

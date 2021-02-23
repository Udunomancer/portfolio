import React from "react";
import resume from "../../Assets/Resume.pdf";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 bg-white py-3 mx-2">
                    <div className="row mx-2">
                        <div className="col-sm-12">
                            <h1 className="border-bottom py-3"><strong>Contact</strong></h1>
                        </div>
                    </div>
                    <div className="row m-2 py-2">
                        <div className="col-sm-4 border-right">
                            <p><strong>GitHub: </strong><br></br><a href="https://github.com/Udunomancer" target="_blank">github.com/Udunomancer</a></p>
                            <p><strong>LinkedIn: </strong><br></br><a href="https://www.linkedin.com/in/kyle-chriscoe/" target="_blank">linkedin.com/in/kyle-chriscoe</a></p>
                            <p><strong>Resume: </strong><br></br><a href={resume} target="_blank">Click Here</a></p>
                            <p><strong>Email: </strong><br></br><a href="mailto:kyle717@gmail.com">kyle717@gmail.com</a></p>
                            <p><strong>Phone: </strong><br></br>(404) 725-3435</p>
                        </div>
                        <div className="col-sm-8">
                            <form>
                                <div className="form-group row">
                                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email Address"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="message" className="col-sm-2 col-form-label">Message</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary">Message Me!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;
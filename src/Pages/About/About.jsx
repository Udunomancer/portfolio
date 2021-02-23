import React from "react";

function About() {
    const profile = require("../../Assets/Images/profile.png").default;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 bg-white py-3 mx-2">
                    <div className="row mx-2">
                        <div className="col-sm-12">
                            <h1 className="border-bottom py-3"><strong>About</strong></h1>
                        </div>
                    </div>
                    <div className="row m-2 py-2">
                        <div className="col-sm-12">
                            <img src={profile} alt="Personal" className="img-fluid float-left w-25 p-2 mr-2" id="about-image" />
                            <article className="single-post-content-wraper p-2">
                                <p>Thanks for visiting my Profile! I am a full-stack software developer currently enrolled in the Georgia Tech Full-Stack Coding Boot Camp.  I have 4 years of systems experience as a HR Information Systems Analyst, working on several Human Resources platforms.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
import React from "react";
import Project from "../../Components/Project/Project";

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 bg-white py-3 mx-2">
                    <div className="row mx-2">
                        <div className="col-sm-12">
                            <h1 className="border-bottom py-3"><strong>Portfolio</strong></h1>
                        </div>
                    </div>
                    <div className="row m-2 py-2">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                    <div className="row m-2 py-2">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
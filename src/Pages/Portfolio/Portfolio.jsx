import React from "react";
import Project from "../../Components/Project/Project";
import ProjectRow from "../../Components/ProjectRow/ProjectRow";

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
                    <ProjectRow>
                        <Project />
                        <Project />
                        <Project />
                    </ProjectRow>
                    <ProjectRow>
                        <Project />
                        <Project />
                        <Project />
                    </ProjectRow>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
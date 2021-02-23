import React from "react";
import Project from "../../Components/Project/Project";
import ProjectRow from "../../Components/ProjectRow/ProjectRow";

function Portfolio() {
    
    let projects = [
        {
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: "https://via.placeholder.com/300x300",
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        }
    ]

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
                        <Project project={projects[0]} />
                        <Project project={projects[1]} />
                        <Project project={projects[2]} />
                    </ProjectRow>
                    <ProjectRow>
                        <Project project={projects[3]} />
                        <Project project={projects[4]} />
                        <Project project={projects[5]} />
                    </ProjectRow>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
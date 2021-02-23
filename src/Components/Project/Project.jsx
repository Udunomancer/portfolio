import React from "react";

function Project({project}) {
    return (
        <section className="col-lg-4">
            <div className="card">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <span>
                        <a href={project.repository} className="btn btn-primary">Repository</a>
                        <a href={project.page} className="btn btn-primary">Page</a>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Project;
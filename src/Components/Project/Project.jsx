import React from "react";

function Project() {
    return (
        <section className="col-lg-4">
            <div className="card">
                <img src="https://via.placeholder.com/300x300" alt="Alt Text" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Project Title</h5>
                    <span>
                        <a href="#" className="btn btn-primary">Repository</a>
                        <a href="#" className="btn btn-primary">Page</a>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Project;
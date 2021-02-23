import React from "react";
import Project from "../../Components/Project/Project";
import ProjectRow from "../../Components/ProjectRow/ProjectRow";
import "./Portfolio.css";

function Portfolio() {
    
    let projects = [
        {
            image: require("../../Assets/Images/employee-directory.png").default,
            title: "Employee Directory",
            repository: "https://github.com/Udunomancer/emp-directory",
            page: "https://udunomancer.github.io/emp-directory/",
        },{
            image: require("../../Assets/Images/budget-tracker.png").default,
            title: "Budget Tracker",
            repository: "https://github.com/Udunomancer/gt-ft-budget-tracker",
            page: "https://budget-tracker-1234.herokuapp.com/",
        },{
            image: require("../../Assets/Images/workout-tracker.png").default,
            title: "Fitness Tracker",
            repository: "https://github.com/Udunomancer/gt-ft-workout-tracker",
            page: "https://kyle-fitness.herokuapp.com/",
        },{
            image: require("../../Assets/Images/game-board.png").default,
            title: "The Game Board",
            repository: "https://github.com/Udunomancer/project2-krypton",
            page: "https://thegameboard.herokuapp.com/",
        },{
            image: require("../../Assets/Images/burger-buddy.png").default,
            title: "Burger Buddy",
            repository: "https://github.com/Udunomancer/gt-ft-burger-buddy",
            page: "https://serene-lowlands-21111.herokuapp.com/",
        },{
            image: require("../../Assets/Images/note-taker.png").default,
            title: "Note Taker",
            repository: "https://github.com/Udunomancer/gt-ft-note-taker",
            page: "https://guarded-island-65290.herokuapp.com/",
        }
    ]

    return (
        <div id="portfolio-page" className="container mt-3">
            <div className="row">
                <div className="col-md-12 py-3 mx-2">
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
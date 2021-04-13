// import default React components
import React from "react";
// import Material-UI components
import { Grid } from "@material-ui/core";
// import custom Components
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
// import Project array
import Projects from "../../Utils/Projects";

function Portfolio() {
  const getProjectDetails = (projectDetailsObj, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <ProjectCard {...projectDetailsObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {Projects.map((projectDetailsObj, index) =>
        getProjectDetails(projectDetailsObj, index)
      )}
    </Grid>
  );
}

export default Portfolio;

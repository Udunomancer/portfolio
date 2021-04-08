// import default React components
import React from "react";
// import Material-UI components
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";

function ProjectCard(props) {

    // Destructure props for use in card
    const { imgSrc, title, description, repoLink, pageLink } = props;

    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia style={{height: "100px" }} image={imgSrc} />
            <CardContent>
                <Typography>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button component="a" href={repoLink}>Repository</Button>
                <Button component="a" href={pageLink}>Page</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
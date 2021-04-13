// import default React components
import React from "react";
// import Material-UI components
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
// import component specific Material-UI styling
import useStyles from "./ProjectCardStyle";

function ProjectCard(props) {
    const classes = useStyles();
    // Destructure props for use in card
    const { imgSrc, title, description, repoLink, pageLink } = props;

    return (
        <Card >
            <CardHeader title={title} className={classes.primaryColor} />
            <CardMedia style={{height: "150px" }} image={imgSrc} />
            <CardContent className={classes.lightColor}>
                <Typography>{description}</Typography>
            </CardContent>
            <CardActions className={classes.primaryColor}>
                <Button component="a" href={repoLink}>Repository</Button>
                <Button component="a" href={pageLink}>Page</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
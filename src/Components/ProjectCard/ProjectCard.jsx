// import default React components
import React from "react";
// import Material-UI components
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
// import component specific Material-UI styling
import useStyles from "../../Utils/Styles/UniversalStyles";

function ProjectCard(props) {
    const classes = useStyles();
    // Destructure props for use in card
    const { imgSrc, title, description, repoLink, pageLink } = props;

    return (
        <Card className={classes.card}>
            <CardHeader title={title} />
            <CardMedia image={imgSrc} className={classes.cardMedia}/>
            <CardContent>
                <Typography>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button component="a" href={repoLink} className={classes.button_text}>Repository</Button>
                <Button component="a" href={pageLink} className={classes.button_text}>Page</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
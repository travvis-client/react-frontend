import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../CSS/carousel.css";

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 300
  },
  media: {
    height: 180
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const project = props.project;

  const ButtonFunction = (name, link) => (
    <Button size="small" color="primary" href={link}>
      {name}
    </Button>
  );
  console.log(props.campaigns);
  return (
    <Card
      className={classes.card}
      // styles={{ background: `url(${props.campaigns.file_link})` }}
    >
      <CardActionArea href={""}>
        <CardMedia className={classes.media} image={props.campaigns.file_link} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {project.title} */}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ minHeight: "80px" }}
          >
            {project.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

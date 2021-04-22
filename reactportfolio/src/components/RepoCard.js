import React from "react";
import SimpleBar from "simplebar-react";
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
  },
  card: {
    width: "100%",
    height: "200px",
    marginLeft: "15px",
    marginRight: "15px",
    margin: "auto",
    transition: "0.3s",
    minHeight: "270px",
    scrollbar: "background-color: red",
    borderRadius: ".625rem!important",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    "&:active": {
      color: "#00008E",
    },
  },
  cardContent: {
    minHeight: "120px",
  },
  cardActions: {
    padding: "16px",
  },
  avatar: {
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[800],
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));

const RepoCard = ({ repo }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={3} className={classes.root}>
      {" "}
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <span
                class="iconify"
                data-icon="octicon-mark-github-16"
                data-inline="false"
              ></span>
            </Avatar>
          }
          title={
            <Typography variant="h5">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.title}
                style={{ textDecoration: "none", color: "black" }}
              >
                {repo.name}
              </a>
            </Typography>
          }
        />
        <SimpleBar>
          <CardContent className={classes.cardContent}>
            <Typography variant="body1">{repo.description}</Typography>
          </CardContent>
        </SimpleBar>
      </Card>
    </Grid>
  );
};

export default RepoCard;

//majority of code WRITTEN BY Sabesan Sathananthan https://bootcamp.uxdesign.cc/embed-your-github-project-on-your-react-website-ccefacc30f62 and extended by Ann Cooper-Milne //

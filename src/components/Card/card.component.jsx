import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";



import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import React from "react";
import {  Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

const CardItem = ({ title, subheader, image, description }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <Card className={classes.root}>
        <CardHeader title={title} subheader={subheader} />
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CardItem;

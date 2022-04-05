import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="contact">
          <Grid container item xs={6}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-required"
                variant="filled"
                placeholder="Your Name"
              />

              <TextField
                id="standard-required"
                variant="filled"
                placeholder="Email Address "
              />
              <TextField
                required
                id="standard-required"
                variant="filled"
                placeholder="Subjet"
              />
              <TextField
                required
                id="standard-required"
                variant="filled"
                placeholder="Your Message"
                multiline
              
              />
              <Button variant="contained" color="primary" size="large">
                Send
              </Button>
            </form>
           
          </Grid>
        </div>
        <Grid container item xs={3}>
        
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Contact;

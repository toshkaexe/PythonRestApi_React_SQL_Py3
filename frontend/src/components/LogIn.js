import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddNewUser from "./AddNewUser";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={false}
        sm={6}
        md={3}
        className={classes.image}
        component={Paper}
      ></Grid>

      <Grid
        item
        xs={false}
        sm={6}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <AddNewUser />

        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid item xs></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core";
import AppRouter from "../routes/AppRouter";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function LoginLayout() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        
        <main className={classes.content}>
          <Toolbar />
          <AppRouter />
        </main>
      </div>

    )
}

export default LoginLayout

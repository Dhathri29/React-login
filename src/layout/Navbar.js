import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
    title: {
      flexGrow: 1,
    },
 
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Dolstock
            </Typography>
          
              <Button component ={Link} 
                      to = "/login"
                      color="inherit">Login</Button>
            
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar

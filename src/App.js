import React from 'react';
import Routes from './components/Routes';
import Footer from './components/footer';
import Header from './components/header';

//React Router
import { BrowserRouter as Router } from 'react-router-dom';

//Material UI
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles(theme => ({
  root: {
    height: 'auto',
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: '#333333'
  },
  headerRow: {},
  footerRow: {
    padding: '5%',
    color: '#00d1be',
    backgroundColor: '#0A0300'
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footerRow}>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

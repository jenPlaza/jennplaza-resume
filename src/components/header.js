import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../images/logo_jenPlaza.png';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  img: {
    float: 'left',
    //border: '1px solid red',
    margin: '0% 0% 5% -8%',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      margin: '-22% 0% 0% 0%',
      width: '150%'
    },
    [theme.breakpoints.up('md')]: {
      margin: '-13% 0% 0% 0%',
      width: '70%'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '-5% 0% 0% 0%',
      width: '40%'
    },
    [theme.breakpoints.up('xl')]: {
      margin: '-1% 0% 0% 5%',
      width: '25%'
    }
  },
  navbar: {
    //border: '1px solid pink',
    height: '100px',
    marginTop: '10%',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('xl')]: {
      margin: '7.5% 0% 0% 5%'
    }
  },
  navItem: {
    color: '#00d1be !important',
    fontSize: '2em !important',
    margin: '8% 0% 0% 5%',
    display: 'inline-block'
  },
  navItemContainer: {
    margin: '4% 0% 0% -15%',
    //border: '1px solid green',
    width: '450px',
    fontSize: '1.5em',
    [theme.breakpoints.up('sm')]: {
      margin: '-10% 0% 0% 20%',
      width: '500px'
    }
  },
  navbarBrand: {
    width: '80%',
    //border: '1px solid aqua',
    margin: '-10% 0% 0% -5%',
    [theme.breakpoints.up('sm')]: {
      width: '100%'
    }
  },
  navLink: {
    color: '#00d1be'
  }
}));

//exporting a class footer
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const classes = useStyles();
  return (
    <div>
      <Navbar color="transparent" dark expand="md" className={classes.navbar}>
        <NavbarBrand
          className={classes.navbarBrand}
          href="https://jenplaza.github.io/jennplaza/"
        >
          {' '}
          <img className={classes.img} src={logo} alt="Logo" />{' '}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <div className={classes.navItemContainer}>
              <NavItem className={classes.navItem}>
                <NavLink
                  className={classes.navLink}
                  href="https://jenplaza.github.io/jennplaza/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className={classes.navItem}>
                <NavLink
                  className={classes.navLink}
                  href="https://jenplaza.github.io/jennplaza-aboutme/"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem className={classes.navItem}>
                <NavLink
                  className={classes.navLink}
                  href="https://jenplaza.github.io/jennplaza-resume/"
                >
                  Resume
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

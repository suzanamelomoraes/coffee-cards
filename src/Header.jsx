import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Material UI sandbox - Coffee Shop
        </Typography>
        <FreeBreakfastIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

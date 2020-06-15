import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>Material UI sandbox - Coffee Shop</Typography>
        <FreeBreakfastIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

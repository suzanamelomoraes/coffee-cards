import React from 'react';
import Header from './Header';
import Content from './Content';
import Offers from './Offers';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import amber from '@material-ui/core/colors/amber';
import purple from '@material-ui/core/colors/purple';

//To overwrite the default theme
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber,
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.up('sm')]: {
      primary: purple,
      size: 'large',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />

          <Offers />
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            size='small'
          >
            Click here
          </Button>
          <Typography variant='h3'>Your best coffee shop!</Typography>
          <ThemeProvider theme={theme}>
            <Button color='secondary' variant='contained' size='small'>
              More Info
            </Button>
          </ThemeProvider>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;

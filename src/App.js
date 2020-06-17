import React from 'react';
import Header from './Header';
import Content from './Content';
import Offers from './Offers';
import { Grid, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { blueGrey, red } from '@material-ui/core/colors';


//To overwrite the default theme
const theme = createMuiTheme({
  pallete: {
    primary: blueGrey,
    secondary: red,
  },
});

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
          <ThemeProvider theme={theme}>
            <Offers />
          </ThemeProvider>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;

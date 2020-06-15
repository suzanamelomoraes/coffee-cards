import React from 'react';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>This will be the header</Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          This will be the content
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;

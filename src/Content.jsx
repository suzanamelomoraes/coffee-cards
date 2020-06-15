import React from 'react';
import CoffeeCard from './CoffeeCard';
import coffeeList from './data';
import { Grid } from '@material-ui/core';

const Content = () => {
  return (
    <Grid container spacing={2}>
      {coffeeList.map((coffee) => (
        <Grid item xs={12} sm={4}>
          <CoffeeCard {...coffee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;

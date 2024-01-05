

import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

// ... Import statements

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={3}>
        {/* Service 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
            {/* Add your desired background color here */}
            <Typography variant="h6" gutterBottom>
              Meal Delivery
            </Typography>
            <Typography paragraph>
              Enjoy the convenience of having delicious meals delivered to your doorstep.
            </Typography>
          </Paper>
        </Grid>
        

        {/* Service 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
            {/* Add your desired background color here */}
            <Typography variant="h6" gutterBottom>
              Catering Events
            </Typography>
            <Typography paragraph>
              Make your events memorable with our catering services. We handle the food so you can
              focus on the celebration.
            </Typography>
          </Paper>
        </Grid>

        {/* Add more services as needed */}
      </Grid>
    </Container>
  );
};

export default Services;

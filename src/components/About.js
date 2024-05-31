import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company! We are dedicated to providing the best service possible. 
          Our team works tirelessly to meet and exceed your expectations. 
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" component="h3">
            Email:
          </Typography>
          <Typography variant="body1" paragraph>
            contact@ourcompany.com
          </Typography>
          <Typography variant="h6" component="h3">
            Phone:
          </Typography>
          <Typography variant="body1" paragraph>
            +1 (123) 456-7890
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About;

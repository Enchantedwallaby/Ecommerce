import React from 'react';
import { Container, Typography, Box, Paper, Grid, Button } from '@mui/material';
function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Home Page
      </Typography>
      <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box>
            <Typography variant="h4" component="h2" gutterBottom>
              Welcome to our webpage
            </Typography>
            <Typography variant="body1" paragraph>
              We are glad to have you here. Explore our site to learn more about our services and offerings.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Email: contact@gmail.com
              </Typography>
              <Typography variant="body1" paragraph>
                Phone: +91 8105643829
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              
              height: '100%',
              backgroundImage: 'url(https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 1,
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;

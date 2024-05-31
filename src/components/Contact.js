import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We would love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Our Contact Information
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
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Send Us a Message
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

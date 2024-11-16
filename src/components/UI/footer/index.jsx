import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="space-around"
      sx={{
        padding: '30px',
        backgroundColor: '#1F2937',
        borderTop: '2px solid rgba(255, 255, 255, 0.1)',
        color: '#E5E7EB',
      }}
    >
      <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">Teléfono: +54 1199887766</Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">Email: segurosbbva@gmail.com</Typography>
      </Grid>
      <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">Dirección: Río de Janeiro 000</Typography>
      </Grid>
    </Grid>
  );
}
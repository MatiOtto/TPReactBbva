import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import logo from '../../../assets/autoLogo1.png';

export default function Header() {

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        paddingY: '10px',
        paddingX: '10px',
        backgroundColor: '#1F2937', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
      }}
    >
      
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
      
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
        <Typography color="#FFFFFF" variant="h6">
          BBVA Seguros
        </Typography>
      </Grid>

     
      <Grid
        item
        xs={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        
        

          <Typography sx={{ fontSize: '18px', color: '#E5E7EB' }}><Button>
            Lista
            </Button>
          </Typography>
      
          <Typography sx={{ fontSize: '18px', color: '#E5E7EB' }}><Button>
            Crear 
            </Button>
          </Typography>
          
          <Typography sx={{ fontSize: '18px', color: '#E5E7EB' }}><Button>
            Eliminar 
            </Button>
          </Typography>
     
        
       
      </Grid>

      
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
        }}
      >
        
          
       
        
          <Button
            variant="outlined"
            size="medium"
            sx={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#3B82F6', 
              borderColor: '#3B82F6',
              textTransform: 'none',
              borderRadius: '30px',
              padding: '10px 20px',
              minWidth: '120px',
              '&:hover': {
                backgroundColor: '#E5E7EB', 
                borderColor: '#3B82F6',
              },
            }}
          >
            Iniciar sesión
          </Button>
      
      </Grid>
    </Grid>
  );
}
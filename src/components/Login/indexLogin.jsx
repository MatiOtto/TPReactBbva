import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticación
    if (username === 'usuarioEjemplo' && password === '') {
      // Redirigir a la página de lista de pólizas
      navigate('/tablapolizas');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100vh',
        backgroundColor: '#1F2937',
      }}
    >
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h4" color="#FFFFFF" gutterBottom>
          Iniciar Sesión
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#E5E7EB' },
              '&:hover fieldset': { borderColor: '#3B82F6' },
              '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
            },
            '& .MuiInputLabel-root': { color: '#E5E7EB' },
            '& .MuiInputBase-input': { color: '#FFFFFF' },
          }}
        />
      </Grid>

      <Grid item xs={12} sx={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginBottom: '20px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#E5E7EB' },
              '&:hover fieldset': { borderColor: '#3B82F6' },
              '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
            },
            '& .MuiInputLabel-root': { color: '#E5E7EB' },
            '& .MuiInputBase-input': { color: '#FFFFFF' },
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            backgroundColor: '#3B82F6',
            color: '#FFFFFF',
            padding: '10px 20px',
            borderRadius: '30px',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#2563EB' },
          }}
        >
          Iniciar sesión
        </Button>
      </Grid>
    </Grid>
  );
}
import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
     <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mt={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Aprender Texto
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Redireciona para a página de aprendizado de textos.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleNavigate('/learn-text')}>Aprender</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Palavras do Dia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Redireciona para a página de palavras do dia.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleNavigate('/word-of-the-day')}>Ver Palavras</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Palavras Aprendidas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Redireciona para a página de palavras aprendidas.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleNavigate('/learned-words')}>Ver Palavras</Button>
          </CardActions>
        </Card>
      </Box>

  );
};

export default Home;

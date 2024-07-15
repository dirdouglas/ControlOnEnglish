import React from 'react';
import { Box, Typography } from '@mui/material';

const WordOfTheDay = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h4" gutterBottom>
        Palavras do Dia
      </Typography>
      <Typography variant="body1">
        Conteúdo para palavras do dia.
      </Typography>
    </Box>
  );
};

export default WordOfTheDay;

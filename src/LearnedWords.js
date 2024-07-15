import React from 'react';
import { Box, Typography } from '@mui/material';

const LearnedWords = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <Typography variant="h4" gutterBottom>
        Palavras Aprendidas
      </Typography>
      <Typography variant="body1">
        Conteúdo para palavras aprendidas.
      </Typography>
    </Box>
  );
};

export default LearnedWords;

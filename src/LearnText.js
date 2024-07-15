import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, IconButton } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import axios from 'axios';

const LearnText = () => {
  const [text, setText] = useState('');
  const [sentences, setSentences] = useState([]);
  const [audioUrls, setAudioUrls] = useState([]);
  const [error, setError] = useState('');

  const handleLearn = async () => {
    try {
      const response = await axios.post('https://g7z6hbh79c.execute-api.us-east-2.amazonaws.com/dev/text', JSON.stringify({ text }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Adicionando verificações para garantir que sentences e audio_urls estejam definidos
      setSentences(response.data.sentences || []);
      setAudioUrls(response.data.audio_urls || []);
      setError('');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError('Ocorreu um erro ao processar o texto. Verifique a console para mais detalhes.');
    }
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <TextField
          label="Texto em Inglês"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLearn}>
          Aprender
        </Button>
        {error && <Typography color="error" mt={2}>{error}</Typography>}
        <Box mt={4} width="100%">
          {sentences.length > 0 && sentences.map((sentence, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2}>
              <Box flexGrow={1}>
                <Typography variant="body1"><strong>Inglês:</strong> {sentence}</Typography>
                <Typography variant="body2"><strong>Tradução:</strong> {/* Adicione a lógica de tradução aqui */}</Typography>
              </Box>
              <IconButton onClick={() => new Audio(audioUrls[index]).play()}>
                <AudiotrackIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default LearnText;

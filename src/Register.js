import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { USER_POOL_ID, CLIENT_ID } from './awsConfig';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const userPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
  });

  const signUp = () => {
    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
    ];

    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        setMessage(err.message || JSON.stringify(err));
        return;
      }
      setMessage('Usuário registrado. Verifique seu email para o código de confirmação.');
      setIsRegistered(true);
    });
  };

  const confirmSignUp = () => {
    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        setMessage(err.message || JSON.stringify(err));
        return;
      }
      setMessage('Usuário confirmado com sucesso! Redirecionando para a tela de login...');
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redireciona após 2 segundos
    });
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        {!isRegistered ? (
          <>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp} variant="contained" color="primary" fullWidth>
              Registrar
            </Button>
          </>
        ) : (
          <>
            <TextField
              label="Código de Confirmação"
              variant="outlined"
              margin="normal"
              fullWidth
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <Button onClick={confirmSignUp} variant="contained" color="primary" fullWidth>
              Verificar
            </Button>
          </>
        )}
        {message && <Typography color="error" mt={2}>{message}</Typography>}
      </Box>
    </Container>
  );
};

export default Register;

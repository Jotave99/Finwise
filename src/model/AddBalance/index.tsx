import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Title, Text, Form, Input, Button, ErrorMessage } from './style';

const AddBalance: React.FC = () => {
  const [balance, setbalance] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbalance(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await axios.post('http://localhost:3001/balance', { balance }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      navigate("/home");
      
    } catch (error) {
      console.error('Erro ao adicionar saldo:', error);
      setError('Formato incorreto.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Adicione seu saldo:</Title>
        <Form onSubmit={handleSubmit}>
        <Text>Saldo</Text>
        <Input type="number" placeholder="Saldo do banco + dinheiro vivo, etc" value={balance} onChange={handleInputChange} />
        <Button type="submit">Adicionar Saldo</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddBalance;

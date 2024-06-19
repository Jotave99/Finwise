import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Seta from '../../images/seta.png';
import { Container, FormContainer, Title, Text, Form, Input, Button, ErrorMessage } from './style';

const AddGoal: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }
  
      const amountNumber = parseFloat(amount);
      if (isNaN(amountNumber)) {
        setError('Por favor, insira um valor numérico válido.');
        return;
      }
  
      const response = await axios.post('http://localhost:3001/goal', { amount: amountNumber }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log(response.data);
      navigate("/home");
      
    } catch (error) {
      console.error('Erro ao adicionar a meta:', error);
      setError('Formato incorreto.');
    }
  };  

  return (
    <Container>
      <FormContainer>
      <Link to="/home">
          <img src={Seta} />
        </Link>
        <Title>Adicione sua meta:</Title>
        <Form onSubmit={handleSubmit}>
          <Text>Meta</Text>
          <Input 
            type="number" 
            placeholder="Informe a sua meta de gastos" 
            value={amount} 
            onChange={handleInputChange} 
          />
          <Button type="submit">Adicionar Meta</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddGoal;

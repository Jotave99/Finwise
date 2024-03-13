import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Title, Text, Form, Input, Button, ErrorMessage } from './style';

const AddExpense: React.FC = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await axios.post('http://localhost:3001/expense', { name, type, value }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao adicionar despesa.', error);
      setError('Dados invalidos.');
    }
  };

  return (
    <Container>
      <FormContainer>
      <Title>Adicione uma Despesa:</Title>
      <Text>Pode ser tanto um gasto, quanto um recebimento.</Text>
        <Form onSubmit={handleSubmit}>
          <Text>Nome</Text>
            <Input type="text" placeholder="EX: recebeu um pix ou enviou" value={name} onChange={handleNameChange} />
          <Text>Tipo</Text>
            <Input type="text" value={type} onChange={handleTypeChange} />
          <Text>Valor</Text>
            <Input type="number" value={value} onChange={handleValueChange} />
          <Button type="submit">Adicionar Despesa</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddExpense;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Seta from '../../images/seta.png';
import { Container, FormContainer, Title, Text, Form, Input, Select, Option, Button, ErrorMessage } from './style';

const AddBalance: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'value':
        setValue(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await axios.post('http://localhost:3001/balance', { name, category, date, value }, {
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
        <Link to="/home">
          <img src={Seta} alt="Voltar" />
        </Link>
        <Title>Adicione seu recebimento:</Title>
        <Form onSubmit={handleSubmit}>
          <Text>Nome</Text>
          <Input type="text" name="name" placeholder="Ex: O salário caiu na conta, etc." value={name} onChange={handleInputChange} />
          <Text>Categoria</Text>
          <Select name="category" value={category} onChange={handleInputChange}>
            <Option value="">Selecione uma categoria</Option>
            <Option value="Salário">Salário</Option>
            <Option value="Outros">Outros</Option>
          </Select>
          <Text>Data</Text>
          <Input type="date" name="date" value={date} onChange={handleInputChange} />
          <Text>Valor</Text>
          <Input type="number" name="value" value={value} onChange={handleInputChange} />
          <Button type="submit">Adicionar</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddBalance;

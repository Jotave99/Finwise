import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Seta from '../../images/seta.png';
import { Container, FormContainer, Title, Text, Form, Input, Select, Option, Button, ErrorMessage } from './style';

const AddExpense: React.FC = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado.');
        return;
      }

      const response = await axios.post('http://localhost:3001/expense', { name, type, value, date }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao adicionar despesa.', error);
      setError('Dados inválidos.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Link to="/home">
          <img src={Seta} alt="Voltar" />
        </Link>
        <Title>Adicione uma Despesa:</Title>
        <Text>Adicione suas despesas do dia-a-dia</Text>
        <Form onSubmit={handleSubmit}>
          <Text>Nome</Text>
          <Input type="text" placeholder="EX: uma conta para pagar ou uma compra" value={name} onChange={handleNameChange} />
          <Text>Categoria</Text>
          <Select value={type} onChange={handleTypeChange}>
            <Option value="">Selecione uma categoria</Option>
            <Option value="Alimentação">Alimentação</Option>
            <Option value="Gastos Pessoais">Gastos Pessoais</Option>
            <Option value="Transporte">Transporte</Option>
            <Option value="Moradia">Moradia</Option>
            <Option value="Entretenimento">Entretenimento</Option>
            <Option value="Outros">Outros</Option>
          </Select>
          <Text>Data</Text>
          <Input type="date" value={date} onChange={handleDateChange} />
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

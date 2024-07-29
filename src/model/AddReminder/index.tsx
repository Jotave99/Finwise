import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Seta from '../../images/seta.png';
import { Button, Container, ErrorMessage, Form, FormContainer, Input, Text, Title } from './style';

const AddReminder: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      // Corrigir a data para o início do dia no horário local
      const localDate = moment(date).startOf('day').toDate();

      await axios.post(
        'http://localhost:3001/reminder',
        { name, date: localDate, value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate('/remindersPage');
    } catch (error) {
      console.error('Erro ao adicionar lembrete:', error);
      setError('Erro ao adicionar lembrete.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Link to="/remindersPage">
          <img src={Seta} alt="Voltar" />
        </Link>
        <Title>Adicionar Lembrete</Title>
        <Form onSubmit={handleSubmit}>
          <Text>Nome:</Text>
          <Input type="text" value={name} onChange={handleNameChange} />
          <Text>Data:</Text>
          <Input type="date" value={date} onChange={handleDateChange} />
          <Text>Valor:</Text>
          <Input type="number" value={value} onChange={handleValueChange} />
          <Button type="submit">Adicionar Lembrete</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddReminder;

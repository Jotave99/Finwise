// Signup.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, FormContainer, Title, Form, Input, Button, ErrorMessage } from './style';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} />
          <Input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={handleChange} />
          <Button type="submit">Criar Conta</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, FormContainer, Title, SubTitle, Form, Input, Button, ErrorMessage, SuccessMessage } from './style'; // Adicionei o SuccessMessage

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Novo estado

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/register', formData);
      console.log(response.data);
      setSuccessMessage('Conta criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      setError('Credenciais inválidas.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Crie sua conta!</Title>
        <SubTitle>Se for cadastrado, por favor, faça <Link to="/login">login</Link></SubTitle>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} />
          <Input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={handleChange} />
          <Button type="submit">Criar Conta</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}  {/* Exibe mensagem de erro */}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>} {/* Exibe mensagem de sucesso */}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Signup;

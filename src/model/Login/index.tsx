// Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, FormContainer, Title, Form, Input, Button, SignupButton, ErrorMessage } from './style';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null); // State para armazenar mensagens de erro
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', formData);
      const { token } = response.data; // Obter o token da resposta
      localStorage.setItem('token', token); // Armazenar o token no localStorage
      navigate('/home'); // Redirecionar para a página inicial
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Usuário ou senha incorretos'); // Definir mensagem de erro
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Bem-Vindo!</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} />
          <Button type="submit">Login</Button>
          <Link to="/signup">
            <SignupButton>Cadastre-se</SignupButton>
          </Link>
          {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibir mensagem de erro, se houver */}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

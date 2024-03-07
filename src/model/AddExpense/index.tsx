import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddExpense: React.FC = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
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
      // Redirecionar o usuário para a página Home após adicionar a despesa
      navigate('/home');
    } catch (error) {
      console.error('Erro ao adicionar despesa:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Tipo:
          <input type="text" value={type} onChange={handleTypeChange} />
        </label>
        <label>
          Valor:
          <input type="number" value={value} onChange={handleValueChange} />
        </label>
        <button type="submit">Adicionar Despesa</button>
      </form>
    </div>
  );
};

export default AddExpense;

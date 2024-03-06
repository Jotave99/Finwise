import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBalance: React.FC = () => {
  const [balance, setbalance] = useState('');
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
    }
  };

  return (
    <div>
      <h2>Adicionar Saldo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Saldo:
          <input type="number" value={balance} onChange={handleInputChange} />
        </label>
        <button type="submit">Adicionar Saldo</button>
      </form>
    </div>
  );
};

export default AddBalance;

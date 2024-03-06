import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSalary: React.FC = () => {
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await axios.post('http://localhost:3001/salary', { salary }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      navigate("/home");
      
    } catch (error) {
      console.error('Erro ao adicionar salário:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Salário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Salário:
          <input type="number" value={salary} onChange={handleInputChange} />
        </label>
        <button type="submit">Adicionar Salário</button>
      </form>
    </div>
  );
};

export default AddSalary;

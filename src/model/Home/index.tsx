import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserData {
  salary: number;
}

const Home: React.FC = () => {
  const [salary, setSalary] = useState<number | null>(null);

  useEffect(() => {
    fetchUserSalary();
  }, []);

  const fetchUserSalary = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get<UserData>('http://localhost:3001/salary', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSalary(response.data.salary);
    } catch (error) {
      console.error('Error fetching user salary:', error);
    }
  };

  return (
    <div>
      <h2>Bem-vindo à Página Inicial</h2>
      {salary !== null && (
        <p>Seu salário atual é: R$ {salary.toFixed(2)}</p>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, Title, Saldo, Button, ExpensesTitle, ExpensesList, ExpensesItem } from './style';

interface UserData {
  balance: number;
}

interface ExpenseData {
  _id: string;
  name: string;
  type: string;
  value: number;
}

const Home: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);

  useEffect(() => {
    fetchUserData();
    fetchUserExpenses();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get<UserData>('http://localhost:3001/balance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching user balance:', error);
    }
  };

  const fetchUserExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get<{expenses: ExpenseData[]}>('http://localhost:3001/expense', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response data:', response.data);

      if (Array.isArray(response.data.expenses)) {
        setExpenses(response.data.expenses);
      } else {
        console.error('Received data is not an array:', response.data.expenses);
      }
    } catch (error) {
      console.error('Error fetching user expenses:', error);
    }
  };

  return (
    <Wrapper>
      <Title>Bem-vindo à Página Inicial</Title>
      {balance !== null && <Saldo>Seu saldo atual é de: R$ {balance.toFixed(2)}</Saldo>}
      <Link to="/addBalance">
        <Button>Adicionar saldo</Button>
      </Link>
      <ExpensesTitle>Despesas</ExpensesTitle>
      <ExpensesList>
        {Array.isArray(expenses) &&
          expenses.map(expense => (
            <ExpensesItem key={expense._id}>
              <p>Nome: {expense.name}</p>
              <p>Tipo: {expense.type}</p>
              <p>Valor: R$ {expense.value.toFixed(2)}</p>
            </ExpensesItem>
          ))}
      </ExpensesList>
      <Link to="/addExpense">
        <Button>Adicionar Despesa</Button>
      </Link>
    </Wrapper>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, Title, BalanceContainer, Saldo, Button, Info, ExpensesSection, MonthlyExpenses, GoalExpenses, ExpensesTitle, ExpensesButton, ExpensesContainer, ExpensesList, ExpensesItem } from './style';
import Add from '../../images/add.png';
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
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchUserExpenses();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const response = await axios.get<UserData>('http://localhost:3001/balance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBalance(response.data.balance);
    } catch (error) {
      console.error('Erro ao buscar o saldo do usuário.', error);
    }
  };

  const fetchUserExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const response = await axios.get<{expenses: ExpenseData[]}>('http://localhost:3001/expense', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data.expenses)) {
        setExpenses(response.data.expenses);
      } else {
        console.error('Os dados recebidos não são um array.', response.data.expenses);
      }
    } catch (error) {
      console.error('Erro ao buscar as despesas do usuário.', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Wrapper>
      <Title>Bem-vindo à Página Inicial</Title>
      <BalanceContainer>
      {balance !== null && (
        <Info>
          <Saldo>Saldo atual: <br /> R$ {balance.toFixed(2)}</Saldo>
          <Link to="/addBalance">
            <Button>+</Button>
          </Link>
        </Info>
      )}
      <ExpensesSection>
        <MonthlyExpenses>Gastos desse mês:</MonthlyExpenses>
        <GoalExpenses>Meta de gastos:</GoalExpenses>
      </ExpensesSection>
    </BalanceContainer>
      <div>
      <ExpensesTitle>Meus registros recentes:</ExpensesTitle>
      <Link to="/addExpense">
        <ExpensesButton><img src={Add} width={'20px'} /></ExpensesButton>
      </Link>
      </div>
      <ExpensesContainer>
        <ExpensesList>
          {Array.isArray(expenses) &&
            expenses.map(expense => (
              <ExpensesItem key={expense._id}>
                <div>
                  <p>{expense.name}</p>
                  <p>{expense.type}</p>
                </div>
                <p>R$ {expense.value.toFixed(2)}</p>
              </ExpensesItem>
            ))}
        </ExpensesList>
      </ExpensesContainer>
      <Button onClick={handleLogout}>Logout</Button>
    </Wrapper>
  );
};

export default Home;

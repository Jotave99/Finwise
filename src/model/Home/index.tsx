import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Wrapper, Title, BalanceContainer, Saldo, BalanceColor, Button, Info, ExpensesSection, MonthlyExpenses, MonthlyExpensesColor, GoalExpenses, ExpensesTitle, ExpensesButton, ExpensesContainer, ExpensesList, ExpensesItem } from './style';
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

interface GoalData {
  amount: number;
}

const Home: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [totalExpenses, setTotalExpenses] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  const [goal, setGoal] = useState<GoalData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchUserExpenses();
    fetchTotalExpenses();
    fetchUserGoal();
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

  const fetchTotalExpenses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const response = await axios.get<{ totalExpenses: number }>('http://localhost:3001/expense/total', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTotalExpenses(response.data.totalExpenses);
    } catch (error) {
      console.error('Erro ao buscar o total das despesas do usuário.', error);
    }
  };

  const fetchUserGoal = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }
  
      const response = await axios.get<{ goal: GoalData }>('http://localhost:3001/goal', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.data.goal) {
        setGoal(response.data.goal);
      } else {
        console.error('Meta de gastos não encontrada.');
      }
    } catch (error) {
      console.error('Erro ao buscar a meta de gastos do usuário:', error);
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
            <Saldo>Saldo atual:
            <BalanceColor>R$ {balance.toFixed(2)}</BalanceColor>
            </Saldo>
            <Link to="/addBalance">
              <Button>+</Button>
            </Link>
          </Info>
        )}
        <ExpensesSection>
          <MonthlyExpenses>Gastos desse mês:<MonthlyExpensesColor>R$ -{totalExpenses !== null ? totalExpenses.toFixed(2) : 'Carregando...'}</MonthlyExpensesColor></MonthlyExpenses>
          <Info>
            <GoalExpenses>Meta de gastos: <br />R$ {goal !== null && goal.amount !== undefined ? goal.amount.toFixed(2) : 'Carregando...'}</GoalExpenses>
            <Link to="/addGoal">
              <Button>+</Button>
            </Link>
          </Info>
        </ExpensesSection>
      </BalanceContainer>
      <ExpensesTitle>Meus registros recentes:
        <Link to="/addExpense">
          <ExpensesButton><img src={Add} width={'20px'} /></ExpensesButton>
        </Link>
      </ExpensesTitle>
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

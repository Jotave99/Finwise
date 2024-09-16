import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import transfer from '../../images/transfer.png';
import receita from '../../images/receipt.png';
import bell from '../../images/bell.png';
import bellNotification from '../../images/bell-notification.png';
import { 
  Wrapper, Title, BalanceContainer, Saldo, BalanceColor, Button, Info, 
  ExpensesSection, MonthlyExpenses, MonthlyExpensesColor, GoalExpenses, 
  ExpensesTitle, ExpensesButton, ExpensesContainer, ExpensesList, 
  ExpensesItem, LogoutButton, ExpensesIcon, ReceiptsItem, ReceiptsColor, 
  NotificationButton, NotificationContainer, 
  NoRegisterMessage
} from './style';
import Add from '../../images/add.png';
import moment from 'moment';
import Menu from '../Menu';

interface UserData {
  name: string;
  balance: number;
  receipts: ReceiptData[];
}

interface ExpenseData {
  _id: string;
  name: string;
  type: string;
  value: number;
  date: string;
}

interface ReceiptData {
  _id: string;
  name: string;
  category: string;
  value: number;
  date: string;
}

interface GoalData {
  amount: number;
  month: string;
}

interface ReminderData {
  _id: string;
  name: string;
  date: Date;
  value: number;
}

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [totalExpenses, setTotalExpenses] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  const [receipts, setReceipts] = useState<ReceiptData[]>([]);
  const [goal, setGoal] = useState<GoalData | null>({ amount: 0, month: moment().format('YYYY-MM') });
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  const [reminders, setReminders] = useState<ReminderData[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [bellImage, setBellImage] = useState<string>(bell);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchUserExpenses(currentMonth);
    fetchTotalExpenses();
    checkGoalReset();
    fetchUserReminders();
  }, [currentMonth]);

  useEffect(() => {
    checkReminders();
  }, [reminders]);

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
      setReceipts(response.data.receipts || []);
      setUserName(response.data.name);
    } catch (error) {
      console.error('Erro ao buscar o saldo do usuário.', error);
    }
  };

  const fetchUserExpenses = async (month: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const [year, monthNum] = month.split('-');

      const response = await axios.get<{ expenses: ExpenseData[] }>(`http://localhost:3001/expense/${year}/${monthNum}`, {
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
  
      const [year, month] = currentMonth.split('-');
  
      const response = await axios.get<{ totalExpenses: number }>(`http://localhost:3001/expense/total/${year}/${month}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setTotalExpenses(response.data.totalExpenses);
    } catch (error) {
      console.error('Erro ao buscar o total das despesas do usuário.', error);
    }
  }; 

  const fetchUserGoal = async (month: string) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }
  
      const response = await axios.get<{ goal: GoalData }>(`http://localhost:3001/goal`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log('Resposta da API de meta de gastos:', response.data);
      return response.data.goal;
    } catch (error) {
      console.error('Erro ao buscar a meta de gastos do usuário:', error);
      return null;
    }
  };     

  const checkGoalReset = async () => {
    const currentGoal = await fetchUserGoal(currentMonth);
    console.log('Meta atual:', currentGoal);
    
    if (currentGoal) {
      setGoal(currentGoal);
    } else {
      setGoal({ amount: 0, month: currentMonth });
    }
  };  

  const fetchUserReminders = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const response = await axios.get<{ reminder: ReminderData[] }>('http://localhost:3001/reminder', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReminders(response.data.reminder);
    } catch (error) {
      console.error('Erro ao buscar os lembretes do usuário.', error);
    }
  };

  const checkReminders = () => {
    const today = moment().startOf('day');
    const newNotifications: string[] = reminders
      .filter(reminder => moment(reminder.date).isSame(today, 'day'))
      .map(reminder => `O dia de pagar ${reminder.name} chegou, não se esqueça!`);

    if (newNotifications.length > 0) {
      setBellImage(bellNotification);
    }

    setNotifications(newNotifications);
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setBellImage(bell);
  };

  const handleMonthChange = (delta: number) => {
    setCurrentMonth(moment(currentMonth).add(delta, 'months').format('YYYY-MM'));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const currentMonthExpenses = expenses;
  const currentMonthReceipts = Array.isArray(receipts) ? receipts.filter(receipt => moment(receipt.date).format('YYYY-MM') === currentMonth) : [];

  return (
    <Wrapper>
      <Title>
        Bem-vindo, {userName ? userName : 'Usuário'}
        <NotificationButton onClick={handleNotificationClick}>
          <img src={bellImage} alt="Notificações" />
        </NotificationButton>
      </Title>
      {showNotifications && notifications.length > 0 && (
        <NotificationContainer>
          {notifications.map((notification, index) => (
            <p key={index}>{notification}</p>
          ))}
        </NotificationContainer>
      )}
      <BalanceContainer>
        {balance !== null && (
          <Info>
            <Saldo>Saldo atual:<br />
              <BalanceColor>R$ {balance.toFixed(2)}</BalanceColor>
            </Saldo>
            <Link to="/addBalance">
              <Button>+</Button>
            </Link>
          </Info>
        )}
        <ExpensesSection>
          <MonthlyExpenses>Gastos esse mês:<br /> <MonthlyExpensesColor>R$ -{totalExpenses?.toFixed(2)}</MonthlyExpensesColor></MonthlyExpenses>
          {goal !== null && (
            <GoalExpenses>Meta de gastos:<br /> R$ {goal.amount}</GoalExpenses>
          )}
        </ExpensesSection>
      </BalanceContainer>
      <ExpensesTitle>
        Adicionar despesas<Link to="/addExpense">
            <ExpensesButton>
              <img src={Add} alt="Add Expense" />
            </ExpensesButton>
          </Link>
        </ExpensesTitle>
      <ExpensesTitle>
        Registros de {moment(currentMonth).format('MMMM YYYY')}
          <LogoutButton onClick={() => handleMonthChange(-1)}>&lt;</LogoutButton>
          <LogoutButton onClick={() => handleMonthChange(1)}>&gt;</LogoutButton>
      </ExpensesTitle>
      <ExpensesContainer>
        <ExpensesList>
          {currentMonthExpenses.length === 0 && currentMonthReceipts.length === 0 ? (
            <NoRegisterMessage>Ainda não tem registros adicionados.</NoRegisterMessage>
          ) : (
            <>
              {currentMonthExpenses.map(expense => (
                <ExpensesItem key={expense._id}>
                  <ExpensesIcon src={transfer} />
                  <div>
                    <p>Descrição: {expense.name}</p>
                    <p>Categoria: {expense.type}</p>
                  </div>
                  <div>
                    <p>Data: {formatDate(expense.date)}</p>
                    <p><MonthlyExpensesColor>R$ -{expense.value.toFixed(2)}</MonthlyExpensesColor></p>
                  </div>
                </ExpensesItem>
              ))}
              {currentMonthReceipts.map(receipt => (
                <ReceiptsItem key={receipt._id}>
                  <ExpensesIcon src={receita} />
                  <div>
                    <p>Descrição: {receipt.name}</p>
                    <p>Categoria: {receipt.category}</p>
                  </div>
                  <div>
                    <p>Data: {formatDate(receipt.date)}</p>
                    <p><ReceiptsColor>R$ +{receipt.value.toFixed(2)}</ReceiptsColor></p>
                  </div>
                </ReceiptsItem>
              ))}
            </>
          )}
        </ExpensesList>
      </ExpensesContainer>
      <br />
      <Menu />
    </Wrapper>
  );
};

export default Home;
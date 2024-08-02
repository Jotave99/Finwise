import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import card from '../../images/card.png';
import { 
  RemindersContainer, RemindersList, RemindersItem, Wrapper, AddRemindersContainer, 
  Info, ReminderH1, ReminderH2, ReminderH3, Header, AddButton, ReminderTitle, ReminderValue, 
  ReminderDate, ReminderCard, ReminderIcon, MonthNavigation, NavigationButton 
} from './style';
import moment from 'moment';

interface ReminderData {
  _id: string;
  name: string;
  date: Date;
  value: number;
}

const RemindersPage: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));

  useEffect(() => {
    fetchReminders();
  }, [currentMonth]);

  const fetchReminders = async () => {
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
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar lembretes:', error);
      setError('Erro ao buscar lembretes.');
      setLoading(false);
    }
  };

  const handleMonthChange = (delta: number) => {
    setCurrentMonth(moment(currentMonth).add(delta, 'months').format('YYYY-MM'));
  };

  const formatDate = (dateString: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const currentMonthReminders = reminders.filter(reminder => moment(reminder.date).format('YYYY-MM') === currentMonth);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <Wrapper>
      <AddRemindersContainer>
        <Header>
          <ReminderH1>Lembrete de contas a pagar</ReminderH1>
        </Header>
        <Info>
          <ReminderH2>Adicione um lembrete:</ReminderH2>
          <Link to="/addReminder">
            <AddButton>+</AddButton>
          </Link>
        </Info>
      </AddRemindersContainer>
      <MonthNavigation>
        <NavigationButton onClick={() => handleMonthChange(-1)}>&lt;</NavigationButton>
        <ReminderH3>{moment(currentMonth).format('MMMM YYYY')}</ReminderH3>
        <NavigationButton onClick={() => handleMonthChange(1)}>&gt;</NavigationButton>
      </MonthNavigation>
      <RemindersContainer>
        <RemindersList>
          {currentMonthReminders.map((reminder) => (
            <RemindersItem key={reminder._id}>
              <ReminderCard>
                <ReminderIcon src={card} />
                <div>
                  <ReminderTitle>{reminder.name}</ReminderTitle>
                  <ReminderDate>Dia {formatDate(reminder.date)}</ReminderDate>
                </div>
                <ReminderValue>R$ {reminder.value.toFixed(2)}</ReminderValue>
              </ReminderCard>
            </RemindersItem>
          ))}
        </RemindersList>
      </RemindersContainer>
    </Wrapper>
  );
};

export default RemindersPage;

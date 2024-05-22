import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import card from '../../images/card.png';
import { RemindersContainer, RemindersList, RemindersItem, Wrapper, AddRemindersContainer, Info, ReminderH1, ReminderH2, Header, AddButton, ReminderTitle, ReminderValue, ReminderDate, ReminderCard, ReminderIcon } from './style';

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

  useEffect(() => {
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

    fetchReminders();
  }, []);

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
      <RemindersContainer>
        <RemindersList>
          {reminders.map((reminder) => (
            <RemindersItem key={reminder._id}>
              <ReminderCard>
                <ReminderIcon src={card} />
                <div>
                  <ReminderTitle>{reminder.name}</ReminderTitle>
                  <ReminderDate>Dia {new Date(reminder.date).toLocaleDateString()}</ReminderDate>
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RemindersContainer, RemindersList, RemindersItem, Wrapper, AddRemindersContainer, Info, Button, ReminderH1, ReminderH2, IFrame } from './style';

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
          <ReminderH1>Lembrete de contas a pagar</ReminderH1>
        <Info>
            <ReminderH2>Adicione um lembrete:</ReminderH2>
            <Link to="/addReminder">
            <Button>+</Button>
            </Link>
          </Info>
      </AddRemindersContainer>
      <br />
      <RemindersContainer>
        <RemindersList>
          {reminders.map((reminder) => (
            <RemindersItem key={reminder._id}>
              <p>Nome: {reminder.name}</p>
              <p>Data: {new Date(reminder.date).toLocaleDateString()}</p>
              <p>Valor: R$ {reminder.value.toFixed(2)}</p>
            </RemindersItem>
          ))}
        </RemindersList>
      </RemindersContainer>
    </Wrapper>
  );
};

export default RemindersPage;
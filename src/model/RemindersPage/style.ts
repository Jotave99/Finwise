import styled from 'styled-components';
import card from '../../images/card.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 1rem;
`;

export const Header = styled.div`
  width: 500px;
  background-color: #031A6E;
  padding: 1rem;
  text-align: left;
`;

export const AddRemindersContainer = styled.div`
  width: 600px;
  background-color: #031A6E;
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ReminderH1 = styled.h1`
  font-size: 1rem;
  color: #fff;
  margin: 0;
`;

export const ReminderH2 = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #031A6E;
  }
`;

export const RemindersContainer = styled.div`
  width: 600px;
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RemindersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const RemindersItem = styled.li`
  width: 100%;
  padding: 0.5rem 0;
`;

export const ReminderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ReminderIcon = styled.img`
  margin-right: -20rem;
`;

export const ReminderTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
`;

export const ReminderDate = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #666;
`;

export const ReminderValue = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #031A6E;
`;

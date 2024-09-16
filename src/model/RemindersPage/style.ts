import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  width: 500px;
  background-color: #031A6E;
  padding: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const AddRemindersContainer = styled.div`
  width: 600px;
  background-color: #031A6E;
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ReminderH1 = styled.h1`
  font-size: 1rem;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ReminderH2 = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ReminderH3 = styled.h2`
  font-size: 1.2rem;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0.2rem 0.4rem;
  }
`;

export const RemindersContainer = styled.div`
  width: 600px;
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.25rem 0;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;
  }
`;

export const ReminderIcon = styled.img`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

export const ReminderTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const NoReminderMessage = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ReminderDate = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ReminderValue = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #031A6E;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const NavigationButton = styled.button`
  background-color: #031A6E;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 1rem;

  &:hover {
    background-color: #4E5E97;
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
    margin: 0 0.5rem;
  }
`;

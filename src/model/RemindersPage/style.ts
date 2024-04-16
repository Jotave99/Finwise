import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const AddRemindersContainer = styled.div`
  background-color: #031A6E;
  padding: 2rem;
  margin-top: -50px;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

export const ReminderH1 = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 0.25rem;
`;

export const ReminderH2 = styled.p`
  font-size: 1.8rem;
  color: #fff;
  margin-top: 0.25rem;
  margin-right: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #4E5E97;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #919DC4;
  }
`;

export const RemindersContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RemindersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RemindersItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

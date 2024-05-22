import styled from 'styled-components';
import Add from '../../images/add.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const BalanceContainer = styled.div`
  background-color: #031A6E;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`;

export const Saldo = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-top: 0.25rem;
`;

export const BalanceColor = styled.span`
  color: #34AA44;
  font-size: 2rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #4E5E97;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #919DC4;
  }
`;

export const ExpensesSection = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
`;

export const MonthlyExpenses = styled.p`
  font-size: 1.2rem;
`;

export const MonthlyExpensesColor = styled.span`
  color: #E6492D;
  font-size: 1.7rem;
`;

export const GoalExpenses = styled.p`
  font-size: 1.2rem;
  margin-right: 50px;
`;

export const ExpensesTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const ExpensesButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
  }
`;

export const ExpensesContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
`;

export const ExpensesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 500px;
`;

export const ExpensesIcon = styled.img`
  margin-right: -10rem;
`;

export const ExpensesItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  width: 460px;
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
    font-size: 1rem;
  }
`;

export const LogoutButton = styled(Button)`
  margin-top: 2rem;
`;

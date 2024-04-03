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
  font-size: 2.5rem;
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
`;

export const Saldo = styled.p`
  font-size: 1.8rem;
  color: #fff;
  margin-top: 0.25rem;
`;

export const BalanceColor = styled.p`
  color: #34AA44;
  margin-top: -0.25rem;
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
  font-size: 1.2rem;
  background-color: #4E5E97;
  color: #fff;
  margin-left: 100px;
  margin-bottom: 4rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const ExpensesSection = styled.div`
  margin-top: -3rem;
  color: #fff;
`;

export const MonthlyExpenses = styled.p`
  font-size: 1.2rem;
`;

export const MonthlyExpensesColor = styled.p`
  color: #E6492D;
  margin-top: -0.25rem;
`;

export const GoalExpenses = styled.p`
  font-size: 1.2rem;
`;

export const ExpensesTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ExpensesButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  width: 10px;
  background-color: #f5f5f5;
  color: #031A6E;
  margin-left: 100px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;


export const ExpensesContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ExpensesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ExpensesItem = styled.li`
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
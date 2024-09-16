import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BalanceContainer = styled.div`
  background-color: #031A6E;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const Saldo = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BalanceColor = styled.span`
  color: #34AA44;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const ExpensesSection = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MonthlyExpenses = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MonthlyExpensesColor = styled.span`
  color: #E6492D;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const GoalExpenses = styled.p`
  font-size: 1.2rem;
  margin-right: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
    margin-top: 1rem;
  }
`;

export const ExpensesTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
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

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
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
  width: 100%;
  max-width: 500px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100%;
  }
`;

export const ExpensesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ExpensesIcon = styled.img`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

export const ExpensesItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
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

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const NoRegisterMessage = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const LogoutButton = styled(Button)`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ReceiptsItem = styled(ExpensesItem)`
  background-color: #fff;
`;

export const ReceiptsColor = styled.span`
  color: #34AA44;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NotificationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  img {
    width: 24px;
    height: 24px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const NotificationContainer = styled.div`
  background-color: #fff;
  color: #031A6E;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 5px;
    margin-bottom: 10px;
  }
`;

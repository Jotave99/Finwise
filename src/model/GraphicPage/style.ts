import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const GraphicContainer = styled.div`
  background-color: #031A6E;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
`;

export const GraphicH1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  margin-top: 0.25rem;
`;

export const GraphicH2 = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-top: 1rem;
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

export const IFrame = styled.iframe`
  background: #F1F5F4;
  align-items: center;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);
  width: 50%;
  height: 50vh;
  margin-top: 2rem;
`;

export const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IncomeExpenseItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #031A6E;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  width: 100%;
`;

interface IncomeExpenseValueProps {
  isPositive: boolean;
}

export const IncomeExpenseValue = styled.p<IncomeExpenseValueProps>`
  font-size: 1.75rem;
  color: ${props => (props.isPositive ? '#34AA44' : '#FF0000')};
`;

interface IncomeExpenseMessageProps {
  isPositive: boolean;
}

export const IncomeExpenseMessage = styled.p<IncomeExpenseMessageProps>`
  font-size: 1.25rem;
  color: #fff;
  margin-top: 0.5rem;
`;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Menu from '../Menu';
import { Wrapper, GraphicContainer, GraphicH1, GraphicH2, IFrame, IncomeExpenseContainer, IncomeExpenseItem, IncomeExpenseValue, IncomeExpenseMessage, GraphicsWrapper, GraphicsRow, GraphicsItem } from './style';

const GraphicPage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');
  const [goalDifference, setGoalDifference] = useState<number | null>(null);

  const fetchUserId = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userIdFromToken = decodedToken.id;
      setUserId(userIdFromToken);
    }
  };

  const fetchGoalDifference = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token não encontrado.');
      }

      const response = await axios.get<{ goalDifference: number }>('http://localhost:3001/goalDifference', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setGoalDifference(response.data.goalDifference);
    } catch (error) {
      console.error('Erro ao buscar a diferença da meta de gastos.', error);
    }
  };

  useEffect(() => {
    fetchUserId();
    fetchGoalDifference();
  }, []);

  const renderGoalDifference = () => {
    if (goalDifference === null) {
      return null;
    }

    const isPositive = goalDifference >= 0;
    const displayValue = `${isPositive ? '+' : '-'}R$ ${Math.abs(goalDifference).toFixed(2)}`;
    const message = isPositive
      ? 'Parabéns, você está cumprindo sua meta!'
      : 'Você ultrapassou sua meta.';

    return (
      <>
        <IncomeExpenseValue isPositive={isPositive}>{displayValue}</IncomeExpenseValue>
        <IncomeExpenseMessage isPositive={isPositive}>{message}</IncomeExpenseMessage>
      </>
    );
  };

  return (
    <Wrapper>
      <GraphicContainer>
        <IncomeExpenseContainer>
          <IncomeExpenseItem>
            <GraphicH1>Diferença entre Meta e Gastos:</GraphicH1>
            {renderGoalDifference()}
          </IncomeExpenseItem>
        </IncomeExpenseContainer>
      </GraphicContainer>
      <GraphicH2>Gráficos:</GraphicH2>
      <GraphicsWrapper>
        <GraphicsRow>
          <GraphicsItem>
            <IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=662100e7-7a45-46b3-8089-cf66fd3723da&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
          </GraphicsItem>
          <GraphicsItem>
            <IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=6661a89e-93dd-408b-85f2-bc23231c4ad4&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
          </GraphicsItem>
        </GraphicsRow>
        <GraphicsRow>
          <GraphicsItem>
            <IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=6661a98e-4b68-4de5-82dc-a4ce4c0ac732&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
          </GraphicsItem>
        </GraphicsRow>
      </GraphicsWrapper>
      <Menu />
    </Wrapper>
  );
};

export default GraphicPage;

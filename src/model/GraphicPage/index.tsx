import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Importando jwtDecode corretamente
import { Wrapper, GraphicContainer, Info, Button, GraphicH1, GraphicH2, IFrame, IncomeExpenseContainer, IncomeExpenseItem, IncomeExpenseValue, IncomeExpensePercentage, IncomeExpenseArrow } from './style';

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

  return (
    <Wrapper>
      <GraphicContainer>
        <IncomeExpenseContainer>
          <IncomeExpenseItem>
            <GraphicH1>Diferença entre Meta e Gastos:</GraphicH1>
            <IncomeExpenseValue>R$ {goalDifference?.toFixed(2)}</IncomeExpenseValue>
          </IncomeExpenseItem>
        </IncomeExpenseContainer>
      </GraphicContainer>
      <GraphicH2>Gráficos:</GraphicH2>
      <IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=662100e7-7a45-46b3-8089-cf66fd3723da&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
    </Wrapper>
  );
};

export default GraphicPage;

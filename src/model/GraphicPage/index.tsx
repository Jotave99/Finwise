import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Importando jwtDecode corretamente
import { Wrapper, GraphicContainer, Info, Button, GraphicH1, GraphicH2, IFrame, IncomeExpenseContainer, IncomeExpenseItem, IncomeExpenseValue, IncomeExpensePercentage, IncomeExpenseArrow } from './style';

const GraphicPage: React.FC = () => {
  const [userId, setUserId] = useState<string>('');

  const fetchUserId = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userIdFromToken = decodedToken.id;
      setUserId(userIdFromToken);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  return (
    <Wrapper>
      <GraphicContainer>
        <IncomeExpenseContainer>
          <IncomeExpenseItem>
            <GraphicH1>Renda desse mês:</GraphicH1>
            <IncomeExpenseValue>R$ +140,00</IncomeExpenseValue>
            <IncomeExpensePercentage><IncomeExpenseArrow>⬆</IncomeExpenseArrow> Aumento de 4% em relação ao mês passado</IncomeExpensePercentage>
          </IncomeExpenseItem>
          <IncomeExpenseItem>
            <GraphicH1>Despesas desse mês:</GraphicH1>
            <IncomeExpenseValue>R$ +140,00</IncomeExpenseValue>
            <IncomeExpensePercentage><IncomeExpenseArrow>⬆</IncomeExpenseArrow> Gastou 2% a menos em relação ao mês passado</IncomeExpensePercentage>
          </IncomeExpenseItem>
        </IncomeExpenseContainer>
      </GraphicContainer>
      <GraphicH2>Gráficos:</GraphicH2>
      <IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=662100e7-7a45-46b3-8089-cf66fd3723da&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
    </Wrapper>
  );
};

export default GraphicPage;

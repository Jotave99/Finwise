import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';// Importando jwtDecode corretamente
import { Link } from 'react-router-dom';
import { Wrapper, GraphicContainer, Info, Button, GraphicH1, GraphicH2, IFrame } from './style';

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
          <GraphicH1>Renda desse mês:</GraphicH1>
          <br/>
          <GraphicH1>Despesas desse mês:</GraphicH1>
      </GraphicContainer>
      <br /><IFrame src={`https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/charts?id=662100e7-7a45-46b3-8089-cf66fd3723da&maxDataAge=3600&filter={user:ObjectId('${userId}')}&theme=light&autoRefresh=true`}></IFrame>
      
    </Wrapper>
  );
};

export default GraphicPage;

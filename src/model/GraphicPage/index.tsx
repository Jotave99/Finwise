import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Wrapper, GraphicContainer, Info, Button, GraphicH1, GraphicH2, IFrame } from './style';

const GraphicPage: React.FC = () => {

  return (
    <Wrapper>
        <GraphicContainer>
          <GraphicH1>Em construção</GraphicH1>
        <Info>
            <GraphicH2>Em construção</GraphicH2>
            <Link to="/addGraphic">
            <Button>+</Button>
            </Link>
          </Info>
      </GraphicContainer>
      <br />
      <IFrame src="https://charts.mongodb.com/charts-finwise-back-end-hwlur/embed/dashboards?id=660e8b98-a329-4e84-8346-b4364f6db9f6&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></IFrame>
    </Wrapper>
  );
};

export default GraphicPage;
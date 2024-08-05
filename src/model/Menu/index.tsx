import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import homeIcon from '../../images/home.png';
import homeIconUnclick from '../../images/home-unclick.png';
import statsIcon from '../../images/stats.png';
import statsIconUnclick from '../../images/stats-unclick.png';
import cardIcon from '../../images/card.png';
import cardIconUnclick from '../../images/card-unclick.png';
import logoutIcon from '../../images/logout.png';
import logoutIconUnclick from '../../images/logout-unclick.png';
import { MenuWrapper, MenuItem, LogoutButton  } from './style';

const Menu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [homeHover, setHomeHover] = useState(false);
  const [statsHover, setStatsHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [logoutHover, setLogoutHover] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <MenuWrapper>
      <MenuItem 
        to="/home" 
        active={location.pathname === '/home'}
        onMouseEnter={() => setHomeHover(true)}
        onMouseLeave={() => setHomeHover(false)}
      >
        <img src={homeHover ? homeIcon : (location.pathname === '/home' ? homeIcon : homeIconUnclick)} alt="Home" />
      </MenuItem>
      <MenuItem 
        to="/graphicPage" 
        active={location.pathname === '/graphicPage'}
        onMouseEnter={() => setStatsHover(true)}
        onMouseLeave={() => setStatsHover(false)}
      >
        <img src={statsHover ? statsIcon : (location.pathname === '/graphicPage' ? statsIcon : statsIconUnclick)} alt="Gráficos" />
      </MenuItem>
      <MenuItem 
        to="/remindersPage" 
        active={location.pathname === '/remindersPage'}
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <img src={cardHover ? cardIcon : (location.pathname === '/remindersPage' ? cardIcon : cardIconUnclick)} alt="Lembretes" />
      </MenuItem>
      <LogoutButton
        onClick={handleLogout}
        active={location.pathname === '/login'}
        onMouseEnter={() => setLogoutHover(true)}
        onMouseLeave={() => setLogoutHover(false)}
      >
        <img src={logoutHover ? logoutIcon : logoutIconUnclick} alt="Logout" />
      </LogoutButton>
    </MenuWrapper>
  );
};

export default Menu;

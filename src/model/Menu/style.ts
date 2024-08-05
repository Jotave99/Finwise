import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
`;

export const MenuItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.active ? '#003366' : '#cccccc')};

  & img {
    height: 24px;
    width: 24px;
    margin-bottom: 5px;
  }
`;

export const LogoutButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.active ? '#003366' : '#cccccc')};

  & img {
    height: 24px;
    width: 24px;
    margin-bottom: 5px;
  }
`;
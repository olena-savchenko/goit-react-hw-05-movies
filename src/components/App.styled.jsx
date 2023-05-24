import { styled } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0px -5px 5px -5px rgba(45, 80, 106, 0.6) inset;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #4c4c51;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgba(116, 182, 233, 0.6);
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: rgba(69, 108, 139, 0.64);
  text-shadow: 2px 1px 0px rgba(116, 182, 233, 0.6);
`;


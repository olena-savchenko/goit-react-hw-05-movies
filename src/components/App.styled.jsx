import { styled } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
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
  text-transform: uppercase;
  color: #4c4c51;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgba(116, 182, 233, 0.6);
  }
`;

export const Logo = styled(Link)`
  /* display: flex; */
  /* align-items: center; */
  /* text-decoration: none; */
  /* font-size: 24px; */
  /* font-weight: 700; */
  /* color: rgba(69, 108, 139, 0.64); */
  /* text-shadow: 2px 1px 0px rgba(116, 182, 233, 0.6); */
`;

export const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  /* border-radius: 4px; */
  /* position: relative; */
`;

export const StyledMovieTitle = styled.p`
  padding: 20px;
  font-size: 14px;
  width: 100%;
  font-weight: 600;
  /* text-align: center; */
  color: #4c4c51;
  text-transform: uppercase;
  /* color: white; */
  /* position: absolute; */
  /* bottom: 0; */
  /* top: 0; */
  /* background-color: rgba(98, 96, 96, 0.8); */
  border-bottom: 4px;
  /* background: linear-gradient(
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.9) 70%
  ); */

  flex-grow: 1;
`;

export const StyledHomeTitle = styled.h2`
  font-size: 18px;
  /* font-weight: 700; */
  margin-bottom: 16px;
  text-align: end;
  color:  #4c4c51;
  /* color: rgba(116, 182, 233, 0.6); */
  text-transform: uppercase;
`;

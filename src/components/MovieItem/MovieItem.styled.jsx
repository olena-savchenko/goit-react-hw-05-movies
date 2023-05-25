import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
`;


export const StyledMovieTitle = styled.p`
  padding: 20px;
  font-size: 14px;
  width: 100%;
  font-weight: 600;
  color: #4c4c51;
  text-transform: uppercase;
  border-bottom: 4px;
  flex-grow: 1;
`;
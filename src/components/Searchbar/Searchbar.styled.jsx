import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const StyledSearchForm = styled.form`
margin: 0 auto;
padding-top: 10px;
  display: flex;
  align-items: center;
  max-width: 300px;
  border-radius: 3px;
  overflow: hidden;
  border-bottom: 2px solid rgba(69, 108, 139, 0.64);
  margin-bottom: 16px;
`;

export const StyledSearchBtn = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: transparent;

  :hover {
    fill: rgba(116, 182, 233, 0.6);
  }
`;

export const StyledSearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  color: #8d92a8;

  ::placeholder {
    font: inherit;
    color:  #4c4c51;

  }
`;

export const StyledSearchIcon = styled(ImSearch)`
  width: 24px;
  height: 24px;
  fill: rgba(69, 108, 139, 0.64);
`;

import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const StyledSearchbar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: radial-gradient(
    circle,
    rgba(196, 218, 220, 1) 19%,
    rgba(116, 182, 233, 0.6)
  );
  
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

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

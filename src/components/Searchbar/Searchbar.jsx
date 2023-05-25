import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchIcon,
} from './Searchbar.styled';

const Searchbar = ({handleSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // контрольований інпут
  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    //заборона вводу порожнього рядка
    if (searchQuery.trim() === '') {
      toast.info('Enter a search name!');
      return;
    }

    handleSearch(searchQuery.trim());
    // очищуємо форму
    setSearchQuery('');
  };

  return (
    <StyledSearchForm onSubmit={handleFormSubmit}>
      <StyledSearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      
      <StyledSearchBtn type="submit">
        <StyledSearchIcon />
      </StyledSearchBtn>
    </StyledSearchForm>

  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Searchbar;

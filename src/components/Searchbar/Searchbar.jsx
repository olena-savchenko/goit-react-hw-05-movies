import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchIcon,
} from './Searchbar.styled';

const Searchbar = () => {
    return (
      <StyledSearchbar>
        <StyledSearchForm>
          <StyledSearchBtn type="submit">
            <StyledSearchIcon />
          </StyledSearchBtn>

          <StyledSearchInput
            type="text"
            autoComplete="off"
            autofocus
            placeholder="Search movies..."
          />
        </StyledSearchForm>
      </StyledSearchbar>
    ); 
}

export default Searchbar;
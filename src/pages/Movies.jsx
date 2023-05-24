import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchBtn,
  StyledSearchIcon,
} from '../components/Searchbar/Searchbar.styled';
export const Movies = () => {
    return (
      <main>
        <StyledSearchbar>
          <StyledSearchForm>
            <StyledSearchBtn type="submit">
                <StyledSearchIcon />
            </StyledSearchBtn>
                
            <StyledSearchInput
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search movies..."
            />
          </StyledSearchForm>
        </StyledSearchbar>
      </main>
    );
}
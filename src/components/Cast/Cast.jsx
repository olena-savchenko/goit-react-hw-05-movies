import { StyledTitle } from 'components/App.styled';
import Section from 'components/Section/Section';
import { useEffect, useParams } from 'react';
// import { Link } from 'react-router-dom';
import { fetchCast } from 'services/api';

const Cast = () => {
  // отримуємо динамічне значення :movieId
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const data = await fetchCast(movieId);
        console.log('Акторський склад: ', data);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);
  return (
    <>
      {/* <Link to="cast">Cast</Link> */}
      <div>Актеры</div>
      <Section>
        {
          <>
            <StyledTitle>Additional information</StyledTitle>
            {/* <Cast /> */}
          </>
        }
      </Section>
    </>
  );
};
export default Cast;

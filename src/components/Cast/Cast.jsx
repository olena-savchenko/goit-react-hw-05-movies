import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import poster from 'pictures/anonimys.jpg';
import {
  StyledActorItem,
  StyledActorsList,
  StyledImg,
  StyledInfo,
  StyledName,
  StyledWrap,
} from './Cast.styled';
import Section from 'components/Section/Section';

const Cast = () => {
  // отримуємо динамічне значення :movieId
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
 
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);

      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Section>
      <StyledActorsList>
        {cast.map(
          ({
            id,
            profile_path,
            original_name,
            name,
            character,
          }) => {
            return (
              <StyledActorItem key={id}>
                <StyledWrap>
                  <StyledImg
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : poster
                    }
                    alt={`${original_name} poster`}
                  />
                </StyledWrap>

                <div>
                  <StyledName>{name}</StyledName>
                  <StyledInfo>
                    {character
                      ? `Character: ${character}`
                      : 'Unknown'}
                  </StyledInfo>
                </div>
              </StyledActorItem>
            );
          }
        )}
      </StyledActorsList>
    </Section>
  );
};
export default Cast;

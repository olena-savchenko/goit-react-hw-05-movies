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
  // console.log('MovieId: ', movieId);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
        console.log(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  // original_name
  // character
  // profile_path

  return (
    <Section>
      <StyledActorsList>
        {cast.map(item => {
          return (
            <StyledActorItem key={item.id}>
              <StyledWrap>
                <StyledImg
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                      : poster
                  }
                  alt={`${item.original_name} poster`}
                />
              </StyledWrap>

              <div>
                <StyledName>{item.name}</StyledName>
                <StyledInfo>
                  {item.character ? `Character: ${item.character}` : 'Unknown'}
                </StyledInfo>
              </div>
            </StyledActorItem>
          );
        })}
      </StyledActorsList>
    </Section>
  );
};
export default Cast;

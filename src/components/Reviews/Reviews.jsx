import Section from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { StyledContent, StyledReviews, StyledUserName } from './Reviews.styled';

const Reviews = () => {
  // отримуємо динамічне значення :movieId
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <Section>
      {reviews.length ? (
        <ol>
          {reviews.map(({ id, author, content }) => {
            return (
              <StyledReviews key={id}>
                <StyledUserName>{`${author}:`}</StyledUserName>
                <StyledContent>{content}</StyledContent>
              </StyledReviews>
            );
          })}
        </ol>
      ) : (
        <div> We don't have any reviews for this movie yet</div>
      )}
    </Section>
  );
};
export default Reviews;

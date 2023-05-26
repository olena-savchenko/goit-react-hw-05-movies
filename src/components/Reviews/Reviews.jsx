import Section from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  // отримуємо динамічне значення :movieId
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        // if (results.length === 0) {
        //   return console.log('Обзорів на фільм немає');
        // }

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
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {`${author}`}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div> We don't have any reviews for this movie yet</div>
      )}
    </Section>
  );
};
export default Reviews;

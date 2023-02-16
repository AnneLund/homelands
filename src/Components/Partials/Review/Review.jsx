import React, { useState, useEffect } from "react";
import { CustomerReview } from "./ReviewStyled";
import useGetListItemsByEndPoint from "../../Hooks/useGetListItemsByEndPoint";

const Review = () => {
  const { state: reviews } = useGetListItemsByEndPoint("reviews");
  const [randomReviews, setRandomReviews] = useState([]);

  //Jeg tjekker om homes og homes.items eksisterer, inden jeg tilgår det.
  useEffect(() => {
    if (reviews && reviews.items) {
      const shuffledReviews = reviews.items
        .sort(() => 0.5 - Math.random()) // blander objekterne i mit array
        .slice(0, 1); // tager den første i mit array
      setRandomReviews(shuffledReviews);
    }
  }, [reviews]);

  return (
    <CustomerReview>
      <h3>Det siger kunderne:</h3>

      {randomReviews?.map((quote, i) => (
        <blockquote key={i}>
          <h4>{quote.title}</h4>
          <p>"{quote.content}"</p>
          <p className="author">
            {quote.user.firstname} {quote.user.lastname}, {quote.created_friendly}
          </p>
        </blockquote>
      ))}
    </CustomerReview>
  );
};

export default Review;

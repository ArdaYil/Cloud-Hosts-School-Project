

import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AppContext from '../AppContext';
import { ReviewInterface } from '../Interfaces';
import { Link } from "react-router-dom";

library.add(faStar)

interface ReviewsProps {
    //reviews: number;
}
 
interface ReviewsState {
    
}

console.log(typeof AppContext);
class Reviews extends React.Component<ReviewsProps, ReviewsState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state = {}

    renderStars = (rating: number) => {
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon="star" />
            )
        }

        return stars
    }

    getReview = (review: ReviewInterface) => {
        return (
            <section key={review.id} className="reviews__review card--shadow">
                <h3 className="reviews__review__title">{review.author}</h3>
                <p>
                    {review.content}
                </p>
                <div className="reviews__review__star-container">
                    {this.renderStars(review.rating)}
                </div>
            </section>
        )
    }

    renderReviews = () => {
        let {reviews, reviewLimit} = this.context;
        reviews = reviews.slice(0, reviewLimit);

        return reviews.map((review: ReviewInterface) => this.getReview(review));
    }

    render() { 
        return (
            <React.Fragment>
                <h2 className="title reviews__title uppercase">reviews</h2>

                <article className="reviews">
                    {this.renderReviews()}
                </article>

                <Link to="/" className="more-reviews-link btn btn--primary btn--medium">All Reviews</Link>
            </React.Fragment>
        );
    }
}
 
export default Reviews;
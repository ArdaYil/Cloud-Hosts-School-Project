

import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AppContext from '../AppContext';
import { ReviewInterface } from '../Interfaces';
import { Link } from "react-router-dom";
import CreateReview from '../common/createReview';

library.add(faStar)

interface ReviewsProps {
    //reviews: number;
}
 
interface ReviewsState {
    
}
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
            <section key={review._id} className="reviews__review card--shadow">
                <div className="reviews__review__head">
                    <h3 className="reviews__review__title">{review.author}</h3>
                    <p>
                        {review.content}
                    </p>
                </div>
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

    mainRendering = () => {
        return (
            <React.Fragment>
                <h2 className="title reviews__title uppercase">reviews</h2>

                <article className="reviews">
                    {this.renderReviews()}
                </article>
            </React.Fragment>
        )
    }

    render() { 
        const {reviews} = this.context;
        const reviewText = reviews.length > 0 ? "All Reviews" : "Create Review"

        return (
            <React.Fragment>
                {reviews.length > 0 ? this.mainRendering() : null}

                <CreateReview page="/reviews" text={reviewText}/>
            </React.Fragment>
        );
    }
}
 
export default Reviews;
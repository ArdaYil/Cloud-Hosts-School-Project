

import * as React from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AppContext from '../AppContext';

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

    getReview = (key: number) => {
        return (
            <section key={key} className="review">
                <h3>John Doe</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Molestiae corporis perferendis hic quos ducimus 
                    vitae eum natus in dicta quas?
                </p>
                <div className="star-container">
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                </div>
            </section>
        )
    }

    renderReviews = () => {
        const {reviews: amount} = this.context!;
        const reviews = [];

        for (let i = 0; i < amount; i++) {
            reviews.push(this.getReview(i))
        }

        return reviews
    }

    render() { 
        return (
            <React.Fragment>
                <h2 className="uppercase">reviews</h2>

                <article className="review-container">
                    {this.renderReviews()}
                </article>
            </React.Fragment>
        );
    }
}
 
export default Reviews;
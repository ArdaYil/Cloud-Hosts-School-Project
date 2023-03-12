

import * as React from 'react';
import AppContext from './AppContext';
import CreateReview from './common/createReview';
import Reviews from './Homepage/reviews';
import { ReviewInterface } from "./Interfaces"

interface ReviewsPageProps {
    
}
 
interface ReviewsPageState {
    
}
 
class ReviewsPage extends Reviews {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state = {}

    render() { 
        
        const {reviews} = this.context;

        return (
            <React.Fragment>
                <div className="review-page-wrapper">
                    <div className="review-page">
                        {
                            reviews.length > 0 
                            ? reviews.map((review: ReviewInterface) => this.getReview(review))
                            : <h2 className="no-reviews">There are no reviews</h2>
                        }
                    </div>
                    <CreateReview page="/reviews/new" text="Create Review" />
                </div>
            </React.Fragment>
        );
    }
}
 
export default ReviewsPage;
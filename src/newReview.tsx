

import * as React from 'react';
import Form from './common/form';
import AppContext from './AppContext';
import { CreateReviewInterface } from './Interfaces';
import Star from './common/star';

interface NewReviewProps {
    
}
 
interface NewReviewState {
    
}
 
class NewReview extends Form {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>

    state = {}

    getStars = () => {
        const { rating } = this.context.createReview;
        const values: boolean[] = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {values[i - 1] = true; continue;}
            values[i - 1] = false;
        }

        console.log(values)

        const stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star 
                    onClick={this.context.updateRating} 
                    key={i} 
                    active={values[i]}
                    value={i + 1}
                />
            )
        }

        return stars
    }

    renderStars = () => {
        return (
            <div className="new-review__star-container">
                {this.getStars()}
            </div>
        )
    }

    updateAuthor = (text: string) => this.context.updateAuthor(text)
    updateContent = (text: string) => this.context.updateContent(text)
    composeReview = () => this.context.composeReview()

    render() { 
        const {createReview}: typeof this.context = this.context;
        const {author, content, rating}: CreateReviewInterface = createReview;

        return (
            <React.Fragment>
                <div className="new-review-wrapper">
                    <div className="new-review">
                        <h2 className="new-review__title">New Review</h2>

                        {this.renderInput("author", author, "Author", this.updateAuthor)}
                        {this.renderTextArea("content", content, "Review", this.updateContent)}
                        {this.renderStars()}
                        <div onClick={() => this.composeReview()} className="btn btn--primary btn--medium">Create Review</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NewReview;
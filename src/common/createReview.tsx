

import * as React from 'react';
import { Link } from 'react-router-dom';

const CreateReview = ({text, page}: any) => {
    return (
        <Link to={page} className="more-reviews-link btn btn--primary btn--medium">{text}</Link>
    );
}
 
export default CreateReview;
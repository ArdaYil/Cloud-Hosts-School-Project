

export interface PlanInterface {
    title: string;
    price: number;
    description: string;
}
export interface ReviewInterface {
    author: string;
    content: string;
    rating: number;
    _id: string;
}

export interface CreateReviewInterface {
    author: string,
    content: string;
    rating: number;
}
export interface CreateReviewErrorsInterface {
    author: boolean,
    content: boolean;
}
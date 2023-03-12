

import { ReviewInterface } from "../Interfaces";
import httpService from "./httpService";

let reviews: ReviewInterface[] = []

export async function getReviewsAsync(): Promise<ReviewInterface[]> {
    const { data } = await httpService.get();

    reviews = data;

    return getReviews();
}

export function getReviews(): ReviewInterface[] {
    return reviews.sort((a, b) => b.rating - a.rating);
}

export function setReview(review : ReviewInterface) {
    reviews.push(review);
}

export async function saveReview(data: object): Promise<ReviewInterface> {
    const {data: review} = await httpService.post(data);

    return review;
}


import { PlanInterface } from "../Interfaces";

const plans: PlanInterface[] = [
    {
        title: "regular", 
        price: 10,
        description: `
          The "Regular" plan is perfect for customers, who want high quality cloud hosting with data
          protection for an affordable price. This plan is perfect for individuals!
        `,
    },

    {
        title: "basic", 
        price: 25,
        description: `
            The "Basic" plan is perfect for customers, who wants to employ our outstanding services
            for commercial use. We recomend this plan for small companies.
        `,
    },

    {
        title: "premium", 
        price: 50,
        description: `
            The "Premium" plan is our enterprise plan. This plan provides, perfect cloud hosting services
            with abundant storage and memeory. We also provide powerful CPU cores.
        `,
    },
]

export function getPlans(): PlanInterface[] {
    return plans;
}


import * as React from 'react';
import { PlanInterface } from "../Interfaces";
import AppContext from '../AppContext';

interface PlansProps {
    
}
 
interface PlansState {
    
}
 
class Plans extends React.Component<PlansProps, PlansState> {
    static contextType = AppContext
    declare context: React.ContextType<typeof AppContext>

    state = {}

    renderPlan = (plan : PlanInterface) => {
        return (
            <article className="plan">
                <h3 className="uppercase plan__title">{plan.title}</h3>
                <p className="plan__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Labore voluptatem, ab necessitatibus mollitia quod consectetur 
                    sint delectus fuga dicta laborum!
                </p>
                <p className="plan__price">
                    ${plan.price} / Month
                </p>
            </article>
        )
    }

    renderPlans = () => {
        const {plans} = this.context;

        return plans.map((plan: PlanInterface) => this.renderPlan(plan))
    }

    render() { 
        return (
            <React.Fragment>
                {this.renderPlans()}
            </React.Fragment>
        );
    }
}
 
export default Plans;
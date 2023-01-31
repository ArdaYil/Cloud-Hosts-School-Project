

import * as React from 'react';
import { PlanInterface } from "../Interfaces";
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

const words: string[] = [
    "one", "two", "three"
]

interface PlansProps {
    
}
 
interface PlansState {
    
}
 
class Plans extends React.Component<PlansProps, PlansState> {
    static contextType = AppContext
    declare context: React.ContextType<typeof AppContext>

    state = {}

    getPlanClassName = (index: number): string => {
        const text = words[index];

        return `plans__plan--${text}`;
    }

    renderPlan = (plan : PlanInterface, index: number): JSX.Element => {
        return (
            <article key={plan.title} className={`${this.getPlanClassName(index)} card--shadow`}>
                <section className="plans__plan__section">
                    <h3 className="uppercase plans__plan__title">{plan.title}</h3>
                    <p className="plans__plan__description">
                        {plan.description}
                    </p>
                </section>
                <section className="plans__plan__section">
                    <p className="plans__plan__price">
                        ${plan.price} / Month
                    </p>
                    <Link to="/" className="btn--primary btn--medium plans__plan__button">Choose</Link>
                </section>
            </article>
        )
    }

    renderPlans = (): JSX.Element => {
        const {plans} = this.context;

        return plans.map((plan: PlanInterface, index: number) => this.renderPlan(plan, index))
    }

    render(): JSX.Element { 
        return (
            <article className="plans">
                {this.renderPlans()}
            </article>
        );
    }
}
 
export default Plans;
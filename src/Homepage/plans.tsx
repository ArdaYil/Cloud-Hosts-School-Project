

import * as React from 'react';
import { PlanInterface } from "../Interfaces";
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

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
            <article key={plan.title} className="plans__plan card--shadow">
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

    renderPlans = () => {
        const {plans} = this.context;

        return plans.map((plan: PlanInterface) => this.renderPlan(plan))
    }

    render() { 
        return (
            <article className="plans">
                {this.renderPlans()}
            </article>
        );
    }
}
 
export default Plans;
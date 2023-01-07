

import * as React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNetworkWired, faCloud, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

library.add(faNetworkWired, faCloud, faDatabase)

interface HeroProps {
    
}
 
interface HeroState {
    
}
 
class Hero extends React.Component<HeroProps, HeroState> {
    state = {}

    renderTextContainer = () => {
        return (
            <section className="text-contianer">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis 
                    tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis 
                    tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, 
                </p>
            </section>
        )
    }

    renderBenefits = () => {
        return (
            <section className="benefit-container">
                <section className="benefit-icon">
                    <FontAwesomeIcon icon="network-wired"/>

                    <p>Network</p>
                </section>
                <section className="benefit-icon">
                    <FontAwesomeIcon icon="cloud"/>

                    <p>Cloud</p>
                </section>
                <section className="benefit-icon">
                    <FontAwesomeIcon icon="database"/>

                    <p>Databases</p>
                </section>
            </section>
        )
    }

    render() { 
        return (
            <article className="hero">
                <section className="image">
                    <h2>World Wide Hosting</h2>
                    <Link to="/">Get Started</Link>
                </section>
                {this.renderTextContainer()}
                {this.renderBenefits()}
            </article>
        );
    }
}
 
export default Hero;
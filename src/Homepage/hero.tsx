

import * as React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faNetworkWired, faCloud, faDatabase} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

library.add(faNetworkWired, faCloud, faDatabase);

const medium: number = 600;
const heroTextClassName: string = "hero__text-item"

interface HeroProps {
    
}
 
interface HeroState {
    
}
 
class Hero extends React.Component<HeroProps, HeroState> {
    state = {}
    
    getHeroTextClassName = (): string => "hero__text-item";

    getHeroTextOne = (): JSX.Element => {
        return (
            <p className={heroTextClassName + "--one"}>
                Here on Cloud Hosts, we help invividuals with all sorts of cloud related services.
                We specialize on migrating large codebases to the cloud with minimal inpact.
                Each year we offer services to millions of invividuals, and millions of companies. 
                Take the next step and be a part of Cloud Hosts!
            </p>
        )
    }

    getHeroTextTwo = (): JSX.Element => {
        return (
            <p className={heroTextClassName + "--two"}>
                Furthermore, we provide individuals and companies with various tools, to manage individual
                and company IT. We provide excellent cloud hosting services, with ECC memeory, powerful CPU 
                cores, and an abundant amount of storage. Moreover, we provide inpregneble security for the
                data you transmit to our clouds.
            </p>
        )
    }

    renderTextContainer = (): JSX.Element => {
        if (window.innerWidth > 600) return this.getHeroTextTwo()
    
        return (
            <section className="text-container">
                {this.getHeroTextOne()}
                {this.getHeroTextTwo()}
            </section>
        )
    }

    renderBenefits = (): JSX.Element => {
        return (
            <section className="hero__benefit-container">
                <section className="hero__benefit-container__benefit">
                    <FontAwesomeIcon icon="network-wired"/>

                    <p>Network</p>
                </section>
                <section className="hero__benefit-container__benefit">
                    <FontAwesomeIcon icon="cloud"/>

                    <p>Cloud</p>
                </section>
                <section className="hero__benefit-container__benefit">
                    <FontAwesomeIcon icon="database"/>

                    <p>Databases</p>
                </section>
            </section>
        )
    }

    getSubHeroContent = (): JSX.Element => {
        return (
            <React.Fragment>
                {this.renderTextContainer()}
                {this.renderBenefits()}
            </React.Fragment>
        )
    }

    renderSubHero = (): JSX.Element => {
        if (window.innerWidth < 600) {
            return this.getSubHeroContent();
        }

        return (
            <section className="hero__subhero">
                {this.getSubHeroContent()}
            </section>
        )
    }

    render(): JSX.Element { 
        return (
            <article className="hero">
                <section className="hero__image">
                    <h2 className="hero__image__main-text--title">World Wide Hosting</h2>
                    <section>
                        <Link className="hero__image__main-text btn--primary btn--medium" to="/">Get Started</Link>
                        {window.innerWidth > 600 ? this.getHeroTextOne() : null}
                    </section>
                </section>
                {this.renderSubHero()}
            </article>
        );
    }
}
 
export default Hero;
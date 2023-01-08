

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import AppContext from '../AppContext';

library.add(faArrowRight)

interface NavigationSidebarProps {
    
}
 
interface NavigationSidebarState {
    
}
 
class NavigationSidebar extends React.Component<NavigationSidebarProps, NavigationSidebarState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state: NavigationSidebarState = {}

    getNavbarClassName = (): string => {
        const {navigationSidebarOpen} = this.context;
        const addOn = navigationSidebarOpen ? " open" : "";

        return "navigation-sidebar" + addOn
    }

    render() { 
        const {onNavigationClose} = this.context;

        return (
            <div className={this.getNavbarClassName()}>
                <article>
                    <FontAwesomeIcon onClick={onNavigationClose} icon="arrow-right" />
                    <section>
                        <h2 className="title text-white">Navigation</h2>
                        <Link to="/">Plans</Link>
                        <Link to="/">Domains</Link>
                        <Link to="/">Hosting</Link>
                    </section>
                </article>
            </div>
        );
    }
}
 
export default NavigationSidebar;


import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../AppContext';
import NavigationSidebar from './navigationSidebar';

interface MainNavbarProps {
    
}
 
interface MainNavbarState {
    
}
 
class MainNavbar extends React.Component<MainNavbarProps, MainNavbarState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state = {}

    render() { 
        const {onNavigationOpen} = this.context;

        return (
            <nav className="top-nav">
                <NavigationSidebar />

                <div>
                    <img className="icon-small" src="../public/icons/usa.png"/>
                </div>
                <h1 className="title capitalize">cloud hosts</h1>
                <i onClick={onNavigationOpen} className="top-nav__btn fa fa-bars"/>
                <article className="top-nav__link-container">
                    <Link to="/" className="underline-effect">Plans</Link>
                    <Link to="/" className="underline-effect">Domains</Link>
                    <Link to="/" className="underline-effect">Hosting</Link>
                </article>
                <div className="important-div"></div>
            </nav>
        );
    }
}
 
export default MainNavbar;
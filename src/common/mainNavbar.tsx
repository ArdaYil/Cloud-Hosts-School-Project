

import * as React from 'react';
import { Component } from 'react';
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
            </nav>
        );
    }
}
 
export default MainNavbar;


import * as React from 'react';
import { Component } from 'react';

interface MainNavbarProps {
    
}
 
interface MainNavbarState {
    
}
 
class MainNavbar extends React.Component<MainNavbarProps, MainNavbarState> {
    state = {}
    render() { 
        return (
            <nav className="top-nav">
                <div>
                    <img className="icon-small" src="../public/icons/usa.png"/>
                </div>
                <h1 className="title capitalize">cloud hosts</h1>
                <i className="top-nav__btn fa fa-bars"/>
            </nav>
        );
    }
}
 
export default MainNavbar;
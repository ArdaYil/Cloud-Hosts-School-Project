

import * as React from 'react';
import { Component } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import MainNavbar from './common/mainNavbar';
import MainFooter from './common/mainFooter';
import Homepage from './Homepage/Homepage';
import AppContext from './AppContext';
import "../cssDist/style.css";
import { PlanInterface, ReviewInterface } from './Interfaces';
import { getReviews } from './services/reviewsService';
import { getPlans } from './services/planService';
import NotFound from './notFound';

interface AppProps {
  
}
 
interface AppState {
  reviews: ReviewInterface[];
  plans: PlanInterface[];
  reviewLimit: number;
  navigationSidebarOpen: boolean;
  mediumBreakpoint: boolean;
  onNavigationOpen(): void;
  onNavigationClose(): void;
}

let currentWidth = window.innerWidth;
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    plans: [],
    reviewLimit: 4,
    reviews: [],
    navigationSidebarOpen: false,
    mediumBreakpoint: window.innerWidth > 600,
    onNavigationOpen: () => {this.handleNavigationInput(true)},
    onNavigationClose: () => {this.handleNavigationInput(false)},
  }

  private shouldCloseSidebar = (): boolean => {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    return scrollTop > 200;
  }

  componentDidMount = (): void => {
    this.setState({plans: getPlans(), reviews: getReviews()});
    
    const body = document.querySelector("body");
    const footer = document.querySelector(".footer");

    if (!body?.clientHeight) return;
    if (!footer) return;

    if (window.innerHeight - (body?.clientHeight - 100) > 0) {
      body.style.overflowY = "hidden";
      footer.style.position = "absolute";
      footer.style.position = "100%";
      footer.style.position = "100%";
      footer.style.position = "0";

    bottom: 0;
    }

    else {
      body.style.overflowY = "scroll";
    }
  }

  handleNavigationInput = (value: boolean) => {
    this.setState({navigationSidebarOpen: value});
  }

  render(): JSX.Element { 
    window.addEventListener("scroll", event => {
      if (!this.shouldCloseSidebar()) return;

      this.setState({navigationSidebarOpen: false});
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        if (currentWidth > 600) {
          console.log("Change false");
          this.setState({mediumBreakpoint: false});
          currentWidth = window.innerWidth;
        }
      }

      else {
        if (currentWidth <= 600) {
          console.log("Change true");
          this.setState({mediumBreakpoint: true});
          currentWidth = window.innerWidth;
        }
      }
    })

    return (
      <React.Fragment>
        <AppContext.Provider value={this.state}><MainNavbar /></AppContext.Provider>

        <Routes>
          <Route path="/" element={<AppContext.Provider value={this.state}><Homepage /></AppContext.Provider>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </React.Fragment>
    );
  }
}
 
export default App;